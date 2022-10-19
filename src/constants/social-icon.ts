import { createElement, FC } from "react"
import { RiBilibiliFill,RiTwitterFill,RiQqFill,RiGithubFill } from "react-icons/ri";
export const socialIcon = (social:string) => {
  const map:Record<string,FC> = {
    bilibili: RiBilibiliFill,
    twitter:RiTwitterFill ,
    qq:RiQqFill,
    github:RiGithubFill
  }

  return createElement(map[social] || RiBilibiliFill)
}