import Image from "next/image";
import SearchBox from "./SearchBox";
import styles from "@/styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src="/logo-ml.png"
            alt="Logo"
            width={50}
            height={50}
            priority
          />
        </div>
        <SearchBox />
      </div>
    </header>
  );
};

export default Header;
