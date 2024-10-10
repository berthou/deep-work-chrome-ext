'use client'

import { FormEvent } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function EmailForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const apiUrl = 'https://6707e9e69b6e15d7febc.appwrite.global//v1/functions/6707e9e500326ee54743/executions?type=json';
    const emailInput = e.currentTarget.querySelector('input[type="email"]') as HTMLInputElement;
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const feedback = document.querySelector('.feedback') as HTMLDivElement;

    const postData = {
        'email_address': email,
    };

    const headers = {
        'X-Appwrite-Project': '66fd3a4a00319edad526',
        'Content-Type': 'application/json',
    };
    
    if (!emailRegex.test(email)) {
      console.error('Invalid email address');
      feedback.textContent = 'Please enter a valid email address';
      return;
    }

    console.log('postData', postData);
    console.log('headers', headers);
    console.log('apiUrl', apiUrl);
    fetch(apiUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(postData),
    })
    .then(_ => {
        feedback.classList.remove('text-gray-500');
        feedback.classList.add('text-green-500');
        feedback.textContent = 'Thank you for subscribing!';
    })
    .then(data => {
      console.log('Success:', data);

    })
    .catch((error) => {
      console.error('Error:', error);
      feedback.classList.remove('text-gray-500');
      feedback.classList.add('text-red-500');
      feedback.textContent = 'Oops, something went wrong. Please try again later.';
      // Handle errors
    });
    // Add your form submission logic here
    console.log('Form submitted')
  }

  return (
    <div>
        <form className="flex w-full max-w-sm items-center space-x-2" onSubmit={handleSubmit}>
        <Input
            type="email"
            placeholder="Enter your email"
            className="flex-grow"
        />
        <Button type="submit">Get it for free</Button>
        </form>
    <div className="mt-2"></div>
    <div className="feedback text-sm text-gray-500"></div>
    </div>

  )
}