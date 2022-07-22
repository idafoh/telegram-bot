import nf, { FormData } from 'node-fetch';

export type Data = { [key: string]: any };

export const $fetch = {
  get: async (url: string): Promise<any> => {
    const response = await nf(url);

    return response.json();
  },
  post: async (url: string, data: Data): Promise<any> => {
    const response = await nf(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },
  postFormData: async (url: string, body: FormData): Promise<any> => {
    const response = await nf(url, {
      method: 'POST',
      body: body,
    });

    return response.json();
  },
};
