function SkeletonCard() {
  return (

    <div className="
      bg-zinc-900
      rounded-2xl
      overflow-hidden
      animate-pulse
    ">

      <div className="
        w-full
        h-[350px]
        bg-zinc-800
      " />

      <div className="p-5">

        <div className="
          h-8
          w-40
          bg-zinc-700
          rounded
          mb-5
        " />

        <div className="
          h-4
          w-full
          bg-zinc-700
          rounded
          mb-3
        " />

        <div className="
          h-4
          w-3/4
          bg-zinc-700
          rounded
        " />

      </div>

    </div>

  )
}

export default SkeletonCard