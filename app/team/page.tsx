"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";

import styles from "./Team.module.css";

export default function Team() {
  return (
    <section
      className={`${styles.wrapper} flex flex-col items-center justify-center min-h-screen p-4 md:p-8 text-white relative overflow-hidden`}
    >
      <Link className={styles.backButton} href="/">
        <IconButton color="inherit" aria-label="back" component="span">
          <ArrowBackIcon fontSize="large" />
        </IconButton>
      </Link>

      <div>
        <h1 className="text-5xl">Work with Redoo.</h1>
        <p className="text-xl mt-4">
          Your talent deserves a place to shine. Join our team.
        </p>
        <p className="mt-4">
          Email{" "}
          <span className="bg-gray-600 border-2 border-white p-2 rounded-lg text-white">
            chief@redoohub.com
          </span>{" "}
          to start.
        </p>
      </div>
    </section>
  );
}
