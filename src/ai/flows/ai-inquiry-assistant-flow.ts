'use server';
/**
 * @fileOverview An AI inquiry assistant for Ashim Scholars.
 *
 * - assistInquiry - A function that helps users draft effective inquiry messages.
 * - InquiryAssistantInput - The input type for the assistInquiry function.
 * - InquiryAssistantOutput - The return type for the assistInquiry function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InquiryAssistantInputSchema = z.object({
  initialInquiry: z
    .string()
    .describe('The user\'s initial draft inquiry message.'),
  programOfInterest: z
    .string()
    .optional()
    .describe(
      'The educational program the user is interested in, if specified.'
    ),
});
export type InquiryAssistantInput = z.infer<typeof InquiryAssistantInputSchema>;

const InquiryAssistantOutputSchema = z.object({
  suggestedImprovements: z
    .string()
    .describe(
      'General suggestions to improve the clarity and effectiveness of the inquiry.'
    ),
  relevantQuestions: z
    .array(z.string())
    .describe('A list of relevant questions the user should consider asking.'),
  essentialInformationToInclude: z
    .array(z.string())
    .describe(
      'A list of essential information the user should consider including about themselves or their intent.'
    ),
});
export type InquiryAssistantOutput = z.infer<
  typeof InquiryAssistantOutputSchema
>;

export async function assistInquiry(
  input: InquiryAssistantInput
): Promise<InquiryAssistantOutput> {
  return inquiryAssistantFlow(input);
}

const inquiryAssistantPrompt = ai.definePrompt({
  name: 'inquiryAssistantPrompt',
  input: {schema: InquiryAssistantInputSchema},
  output: {schema: InquiryAssistantOutputSchema},
  prompt: `You are an AI-powered inquiry assistant for Ashim Scholars, an Islamic educational institution. Your goal is to help prospective students or parents draft an effective inquiry message about programs and admissions.

Review the user's initial inquiry and provide suggestions for improvements, relevant questions they should ask, and essential information they should include to make their inquiry comprehensive and receive a quicker, more helpful response.

Initial Inquiry:
"{{{initialInquiry}}}"

{{#if programOfInterest}}
The user has indicated interest in the "{{{programOfInterest}}}" program.
{{/if}}

Provide your suggestions in the following JSON format:
{{{_output_schema_}}}`,
});

const inquiryAssistantFlow = ai.defineFlow(
  {
    name: 'inquiryAssistantFlow',
    inputSchema: InquiryAssistantInputSchema,
    outputSchema: InquiryAssistantOutputSchema,
  },
  async (input) => {
    const {output} = await inquiryAssistantPrompt(input);
    return output!;
  }
);
