import Link from "next/link";
import Image from "next/image";
import { cx } from "@pandacss/css";
import { Button } from "@chakra-ui/react";

import profilePicture from "@/assets/images/me.jpeg";

import { profileCss } from "./styles";
import { SOCIAL_MEDIAS } from "./constants";

const Profile = () => {
  return (
    <section className={cx("profile", profileCss)}>
      <div className="profile__picture shadow-md">
        <Image src={profilePicture} alt="profile-picture" />
      </div>
      <h1 className="profile__name heading-text">Fransiscus Hermanto</h1>
      <h2 className="profile__job-title muted-text">Software Engineer</h2>
      <p className="profile__description sub-heading-text">
        I am a frontend developer with 4+ years of experience, passionate about
        learning, innovation, and creating impactful tools.
      </p>
      <div className="profile__actions">
        <Button size="sm" asChild>
          <Link href="/contact">Contact Me</Link>
        </Button>
        <Button size="sm" asChild variant="outline">
          <Link href="/projects">View Projects</Link>
        </Button>
      </div>
      <div className="profile__social-medias">
        {SOCIAL_MEDIAS.map(({ href, icon, label, name }) => (
          <Link
            key={name}
            href={href}
            rel="noreferrer"
            className="social-media muted-text"
            target="__blank"
          >
            <span className="icon">{icon}</span>
            <span className="sr-only">{label}</span>
          </Link>
        ))}
      </div>
      <div className="profile__location">
        <span className="circle" />
        <span className="location muted-text">Medan, Indonesia</span>
      </div>
    </section>
  );
};

export default Profile;
