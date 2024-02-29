import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import FaqApply from '@/components/faq/FaqApply';

export default function Faq() {
  return (
    <div className='md:px-36 px-4 md:py-20 py-14 space-y-6 md:space-y-8'>
      <div className='space-y-2'>
        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <h1 className='md:text-3xl text-2xl font-bold tracking-tight'>
              자주 묻는 질문
            </h1>
            <p className='text-gray-500 dark:text-gray-400'>
              문의사항이 있으신가요? 아래에서 찾아보세요.
            </p>
          </div>
          <div className=''>
            <Dialog>
              <DialogTrigger asChild>
                <Button className='font-semibold '>문의하기</Button>
              </DialogTrigger>
              <FaqApply />
            </Dialog>
          </div>
        </div>
      </div>
      <div className='space-y-4'>
        <div className='space-y-2'>
          <Accordion className='prose' type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger>
                서비스 이용 시 가장 많이 받는 질문은 무엇인가요??
              </AccordionTrigger>
              <AccordionContent>
                서비스 이용 시 가장 많이 받는 질문은 로그인 및 회원가입과 관련된
                문의입니다. 회원가입 방법, 아이디/비밀번호 찾기, 회원정보 수정
                등과 관련된 문의가 가장 많이 접수됩니다.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className='space-y-2'>
          <Accordion className='prose' type='single' collapsible>
            <AccordionItem value='item-2'>
              <AccordionTrigger>
                서비스 이용 중 문제가 발생했을 때 어떻게 해야 하나요?
              </AccordionTrigger>
              <AccordionContent>
                서비스 이용 중 문제가 발생했을 때는 고객센터에 문의하여 도움을
                받으시기 바랍니다. 문제가 발생한 상세 내용을 설명해주시면 빠르고
                정확한 도움을 받으실 수 있습니다.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className='space-y-2'>
          <Accordion className='prose' type='single' collapsible>
            <AccordionItem value='item-3'>
              <AccordionTrigger>
                서비스 이용 중 문의사항이 있을 때 어떻게 문의해야 하나요?
              </AccordionTrigger>
              <AccordionContent>
                서비스 이용 중 문의사항이 있을 때는 고객센터에 문의하여 도움을
                받으시기 바랍니다. 문의사항을 상세히 기술하여 보내주시면 빠르고
                정확한 답변을 받으실 수 있습니다.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className=' border-gray-200 ' />

      <div className='space-y-2'>
        <h1 className='md:text-3xl text-2xl font-bold tracking-tight'>
          문의 내역
        </h1>
        <p className='text-gray-500 dark:text-gray-400'>
          문의 내역을 확인하고 싶으신가요? 아래에서 확인하세요.
        </p>
        <div className='h-24 flex justify-center items-center'>
          문의 내역 확인은 로그인 후에 확인 가능합니다.
        </div>
        {/* <div className='space-y-4'>
          <div className='space-y-2'>
            <Accordion className='prose' type='single' collapsible>
              <AccordionItem value='item-1'>
                <AccordionTrigger>
                  서비스 이용 시 가장 많이 받는 질문은 무엇인가요??
                </AccordionTrigger>
                <AccordionContent>
                  서비스 이용 시 가장 많이 받는 질문은 로그인 및 회원가입과
                  관련된 문의입니다. 회원가입 방법, 아이디/비밀번호 찾기,
                  회원정보 수정 등과 관련된 문의가 가장 많이 접수됩니다.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div> */}
      </div>
    </div>
  );
}
