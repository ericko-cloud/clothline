export function HeroSection() {
  return (
    <section id='home' className='border-b'>
      <div className='relative min-h-[520px] overflow-hidden bg-muted sm:min-h-[640px] lg:min-h-[calc(100vh-4rem)]'>
        <img
          src='https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=85'
          alt='Koleksi pakaian Clothline'
          className='absolute inset-0 size-full object-cover'
        />
        <div className='absolute inset-0 bg-black/20' />
        <div className='absolute inset-x-0 bottom-12 flex justify-center px-4 text-center text-white sm:bottom-16 lg:bottom-20'>
          <div>
            <p className='text-sm font-medium tracking-[0.22em] text-white/80 uppercase'>
              curated looks
            </p>
            <p className='mt-3 max-w-5xl text-4xl font-semibold text-balance sm:text-6xl lg:text-7xl'>
              Mix outer, linen, dan denim untuk gaya kerja sampai akhir pekan.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
