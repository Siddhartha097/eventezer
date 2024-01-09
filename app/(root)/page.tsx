import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className='bg-primary-50 bg-dotted-pattern py-5 bg-contain md:py-10'>
        <div className='wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0'>
          <div className='flex flex-col justify-center gap-8'>
            <h1 className='h1-bold'>
              Connect, Host, and Celebrate with Ease: Our Platform, Your Events
            </h1>
            <p className='p-regular-20 md:p-regular-24'>
              Book and learn from Our Global Community and Unleash your Potential with 3,235+ Expert Mentors.
            </p>
            <Button asChild size={'lg'} className='button w-full sm:w-fit'>
              <Link href={'#events'}>
                Explore Now
              </Link>
            </Button>
          </div>
          <Image 
            src={'/assets/images/hero.png'}
            alt='hero'
            width={1000}
            height={1000}
            className='max-h-[80vh] object-contain object-center 2xl:max-h-[60vh]'
          />
        </div>
      </section>

      <section id='events' className='wrapper my-8 flex-col flex gap-8 md:gap-12'>
        <h2 className='h2-bold'>
          Trusted by
          <br />
          Thousands of Events
        </h2>

        <div className='flex w-full flex-col gap-5 md:flex-row'>
          Search
          CatagoryFilter
        </div>
      </section>
    </>
  )
}
