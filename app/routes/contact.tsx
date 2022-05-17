import type { ActionFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Form, useActionData, useTransition } from '@remix-run/react';
import Page from '~/components/Page';
import Button from '~/components/Button';
import { delay } from '~/utils';

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  console.log('formData', formData);
  await delay(500);
  return json(formData);
};

export default function Contact() {
  const data = useActionData();
  const transition = useTransition();

  console.log('data', data);
  return (
    <Page>
      <Form method="post" className="px-4 mt-10">
        <div className="mb-2">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your email
          </label>
          <input
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@gmail.com"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your name
          </label>
          <input
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Leave a comment..."
            required
          ></textarea>
        </div>
        <Button
          disabled={transition.state === 'submitting'}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {transition.state === 'submitting' ? '...' : 'Submit'}
        </Button>
      </Form>
    </Page>
  );
}
