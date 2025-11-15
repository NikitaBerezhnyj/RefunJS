import { useEffect } from "react";

export type HeadProps = {
  title?: string;
  description?: string;
  keywords?: string;
  [key: string]: string | undefined;
};

export function Head({ title, description, keywords, ...meta }: HeadProps) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }

    if (keywords) {
      let tag = document.querySelector('meta[name="keywords"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "keywords");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", keywords);
    }

    Object.entries(meta).forEach(([key, value]) => {
      if (!value) return;

      let tag: HTMLMetaElement | null = null;

      if (key.startsWith("og:") || key.startsWith("twitter:")) {
        tag = document.querySelector(`meta[property="${key}"]`);
        if (!tag) {
          tag = document.createElement("meta");
          tag.setAttribute("property", key);
          document.head.appendChild(tag);
        }
      } else {
        tag = document.querySelector(`meta[name="${key}"]`);
        if (!tag) {
          tag = document.createElement("meta");
          tag.setAttribute("name", key);
          document.head.appendChild(tag);
        }
      }

      tag.setAttribute("content", value);
    });
  }, [title, description, keywords, meta]);

  return null;
}
