import { Quote } from 'lucide-react'
import { type Testimonial } from '@/landing-page/domain/entities/testimonial'

type TestimonialSectionProps = {
  testimonials: Testimonial[]
}

export function TestimonialSection({ testimonials }: TestimonialSectionProps) {
  return (
    <section
      id='testimonials'
      className='border-t bg-foreground py-16 text-background'
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-8 max-w-2xl'>
          <p className='text-sm font-medium uppercase tracking-[0.16em] text-background/60'>
            Review
          </p>
          <h2 className='mt-2 text-3xl font-semibold'>Dipakai pelanggan aktif</h2>
        </div>
        <div className='grid gap-4 md:grid-cols-2'>
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.id}
              className='rounded-lg border border-background/15 p-6'
            >
              <Quote className='mb-6 size-6 text-background/60' />
              <blockquote className='text-xl font-medium leading-8'>
                "{testimonial.quote}"
              </blockquote>
              <figcaption className='mt-6 flex items-center gap-3'>
                <img
                  src={testimonial.avatarUrl}
                  alt={testimonial.name}
                  className='size-11 rounded-full object-cover'
                />
                <div>
                  <div className='font-semibold'>{testimonial.name}</div>
                  <div className='text-sm text-background/60'>
                    {testimonial.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
