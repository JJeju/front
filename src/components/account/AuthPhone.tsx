'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot
} from '@/components/ui/input-otp';
import { toast } from '@/components/ui/use-toast';
import { DialogContent } from '../ui/dialog';
import { useRef } from 'react';
import authApi from '@/service/auth';

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: 'Your one-time password must be 6 characters.'
  })
});

export default function AuthPhone() {
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: ''
    }
  });
  const CheckAuthMessage = authApi.PostAuthMessageCheck();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: '인증번호가 불일치 합니다.',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      )
    });
  }

  return (
    <DialogContent className='flex justify-center '>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=' space-y-6'>
          <FormField
            control={form.control}
            name='pin'
            render={({ field }) => (
              <FormItem>
                <FormLabel>인증번호</FormLabel>
                <FormControl>
                  <InputOTP
                    maxLength={6}
                    {...field}
                    onComplete={() => formRef.current?.submit()}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormDescription>인증번호를 입력해주세요.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </DialogContent>
  );
}
