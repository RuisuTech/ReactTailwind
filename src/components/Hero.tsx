// import styles from "./Hero.module.css";

export default function Hero({ first, second }) {
  return (
    <>
      {/* <section className={styles["hero-section"]}>
        <article className={styles["hero-title"]}>
          <span className={styles["hero-span"]}>{first}</span>
          <span className={styles["hero-span"]}>{second}</span>
        </article>
      </section> */}
      <section className="h-[250px] bg-[url('/Shinobu.webp')] bg-cover bg-[center_-260px] flex justify-center">
        <article className="w-[1080px] flex  flex-col items-start justify-center pl-[20px] text-white font-[700] " >
          <span className="text-[20px] ">{first}</span>
          <span className="text-[50px] ">{second}</span>
        </article>
      </section>
    </>
  );
}
