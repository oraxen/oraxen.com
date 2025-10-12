import type { MDXComponents } from "mdx/types";

import {
  BlogEntry,
  Bold,
  CustomLink,
  H1,
  H2,
  H3,
  P,
  Ul,
} from "./app/components/mdx";

import { ArticleImage } from "./app/components/mdx";
import { AiMarketShareChart } from "./app/components/blog/AiMarketShareChart";

export let customComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  Bold: Bold,
  ul: Ul,
  a: CustomLink,
  BlogEntry: BlogEntry,
  ArticleImage: ArticleImage,
  AiMarketShareChart: AiMarketShareChart,
};

export function useMDXComponents(components: MDXComponents) {
  return {
    ...customComponents,
    ...components,
  };
}
