
import sofia from "../assets/Video1_1.mp4"

// function Component() {
//   const ref = useRef(null)
//   const isInView = useInView(ref)
// }

const Video = () => {
  return (
    <>
      {/* <section ref={ref}>
        <span className='mt-32 text-white text-3xl'
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
          Heelo There
        </span>
      </section> */}

      <div className='mt-12 w-[90vw] md:ml-16 ml-5' >
        <video muted autoPlay loop playsInline className='rounded-3xl'>
          <source src={sofia} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>

  )
}

export default Video
