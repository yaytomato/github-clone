import React from "react";

import icon1 from "../imgs/icon1.png";
import icon2 from "../imgs/icon2.png";

interface RadioProps {
  icon: string;
  h4: string;
  p: string;
}

const Radio: React.FC<RadioProps> = ({ icon, h4, p }) => (
  <label className="flex mb-4">
    <input type="radio" name="type" className="mt-1" />
    <img alt="icon" src={icon} className="ml-2 h-8 w-8" />
    <div className="ml-2">
      <h4>{h4}</h4>
      <p className="font-normal text-xs">{p}</p>
    </div>
  </label>
);
interface OptionProps {
  h4: string;
  p: string;
  href: string;
}

const Option: React.FC<OptionProps> = ({ h4, p, href }) => (
  <label className="flex mb-4">
    <input type="checkbox" className="mt-1" />
    <div className="ml-2">
      <h4>{h4}</h4>
      <p className="font-normal text-xs">
        {p} <a href={href}>Learn more.</a>
      </p>
    </div>
  </label>
);

interface Props {}

export const New: React.FC<Props> = ({}) => (
  <div className="w-full mx-auto px-4 md:px-6 md:w-192">
    <section className="pt-10 pb-6">
      <h1 className="mb-1">Create a new repository</h1>
      <p>
        A repository contains all project files, including the revision history.
        Already have a project repository elsewhere?{" "}
        <a href="https://github.com/new/import" className="text-sm">
          Import a repository.
        </a>
      </p>
    </section>

    <section className="border-t border-gray-200 pt-4">
      <div className="mt-6 flex items-end flex-wrap">
        <div>
          <label className="block col-span-2 mb-2">
            Owner <span className="text-red-600">*</span>
          </label>
          <div className="input pl-11 pr-8 py-2 font-semibold text-sm bg-owner mb-4 cursor-pointer hover:bg-gray-100">
            yaytomato
          </div>
        </div>

        <p className="text-2xl mx-2 mb-5">/</p>

        <div>
          <label className="block mb-2">
            Repository name <span className="text-red-600">*</span>
          </label>
          <input type="text" className="input w-60 mb-4" />
        </div>
      </div>
      <p className="mb-5 text-sm text-gray-450">
        Great repository names are short and memorable. Need inspiration? How
        about{" "}
        <span className="cursor-pointer font-bold text-green-350">
          refactored-computing-machine?
        </span>
      </p>

      <label className="block mb-1">
        Description <span className="text-xs text-gray-140">(optional)</span>
      </label>
      <input type="text" className="w-full input mb-4" />
    </section>

    <section className="border-t border-gray-200 pt-4">
      <Radio
        icon={icon1}
        h4="Public"
        p="Anyone on the internet can see this repository. You choose who can
            commit."
      />

      <Radio
        icon={icon2}
        h4="Private"
        p="You choose who can see and commit to this repository"
      />
    </section>

    <section className="border-t border-gray-200 pt-4">
      <h4>Initialize this repository with:</h4>
      <p className="mb-3">
        Skip this step if you’re importing an existing repository.
      </p>

      <Option
        h4="Add a README file"
        p="This is where you can write a long description for your project."
        href="https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/about-readmes"
      />

      <Option
        h4="Add .gitignore"
        p="Choose which files not to track from a list of templates."
        href="https://docs.github.com/en/github/using-git/ignoring-files"
      />

      <Option
        h4="Choose a license"
        p="A license tells others what they can and can't do with your code."
        href="https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository"
      />
    </section>

    <section className="border-t border-b border-gray-200 pt-4 pb-10 mb-5">
      <button
        disabled
        className="bg-green-150 px-4 py-1.5 rounded-md text-gray-100 text-sm"
      >
        Create repository
      </button>
    </section>
  </div>
);

export default New;
