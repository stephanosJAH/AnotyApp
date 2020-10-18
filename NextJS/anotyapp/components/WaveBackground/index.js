export default function Waves({ children }) {
  return (
    <>
      <div className='water'>
        <span className='wave-1'></span>
        <span className='wave-2'></span>
        <span className='wave-3'></span>
        <span className='deep-water'>{children}</span>
      </div>

      <style jsx>{`
        main {
          overflow: hidden;
        }

        .water {
          margin-top: 25px;
          position: relative;
          animation: water-up 1s cubic-bezier(0.25, 0.1, 0.49, 1.17);
        }

        span {
          display: block;
          width: 100%;
        }
        .wave-1 {
          position: absolute;
          z-index: 1;
          background: url('wave.svg');
          height: 50px;
          background-size: contain;
          animation: wave-r 60s linear infinite;
        }
        .wave-2 {
          position: absolute;
          background: url('wave_2.svg');
          height: 50px;
          background-size: contain;
          animation: wave-l 55s linear infinite;
        }
        .wave-3 {
          background: url('wave_3.svg');
          height: 50px;
          background-size: contain;
          animation: wave-b 45s linear infinite;
        }

        .deep-water {
          background-image: linear-gradient(#00d6ff, #81e5f9, white);
          height: 650px;
        }

        @keyframes wave-r {
          0% {
            background-position: 0px 0px;
          }
          50% {
            background-position: 1000px 0px;
          }
          100% {
            background-position: 0px 0px;
          }
        }

        @keyframes wave-l {
          0% {
            background-position: 0px 0px;
          }
          50% {
            background-position: -600px 0px;
          }
          100% {
            background-position: 0px 0px;
          }
        }
        @keyframes wave-b {
          0% {
            background-position: 0px 0px;
          }
          50% {
            background-position: -200px 0px;
          }
          100% {
            background-position: 0px 0px;
          }
        }

        @keyframes water-up {
          0% {
            transform: translateY(200%);
          }
          100% {
            transform: translateY(0%);
          }
        }
      `}</style>
    </>
  );
}
