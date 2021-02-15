import React from "react";

interface Props {}

export const New: React.FC<Props> = ({}) => (
  <div className="w-full mx-auto px-4 md:px-6 md:w-192">
    <section>
      <h1>Create a new repository</h1>
      <p>
        A repository contains all project files, including the revision history.
        Already have a project repository elsewhere?{" "}
        <a href="https://github.com/new/import">Import a repository.</a>
      </p>
    </section>

    <section>
      <div className="grid grid-cols-3">
        <label className="col-span-2">
          Owner <span>*</span>
        </label>
        <label>
          Repository name <span>*</span>
        </label>
        <button>yaytomato</button>
        <p>/</p>
        <input />
      </div>
      <p>
        Great repository names are short and memorable. Need inspiration? How
        about{" "}
        <span className="cursor-pointer">refactored-computing-machine?</span>
      </p>

      <label className="block">
        Description <span>(optional)</span>
      </label>
      <input type="text" className="w-full" />
    </section>

    <section>
      <label className="flex">
        <input type="radio" name="type" />
        <img alt="icon" />
        <div>
          <h4>Public</h4>
          <p>
            Anyone on the internet can see this repository. You choose who can
            commit.
          </p>
        </div>
      </label>

      <label className="flex">
        <input type="radio" name="type" />
        <img alt="icon" />
        <div>
          <h4>Private</h4>
          <p>You choose who can see and commit to this repository</p>
        </div>
      </label>
    </section>

    <section>
      <h4>Initialize this repository with:</h4>
      <p>Skip this step if you’re importing an existing repository.</p>

      <label className="flex">
        <input type="checkbox" />
        <div>
          <h4>Add a README file</h4>
          <p>
            This is where you can write a long description for your project.{" "}
            <a href="https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/about-readmes">
              Learn more.
            </a>
          </p>
        </div>
      </label>

      <label className="flex">
        <input type="checkbox" />
        <div>
          <h4>Add .gitignore</h4>
          <p>
            Choose which files not to track from a list of templates.{" "}
            <a href="https://docs.github.com/en/github/using-git/ignoring-files">
              Learn more.
            </a>
          </p>
        </div>
      </label>

      <label className="flex">
        <input type="checkbox" />
        <div>
          <h4>Choose a license</h4>
          <p>
            A license tells others what they can and can't do with your code.{" "}
            <a href="https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository">
              Learn more.
            </a>
          </p>
        </div>
      </label>
    </section>

    <section>
      <button disabled>Create repository</button>
    </section>
  </div>
);

export default New;
