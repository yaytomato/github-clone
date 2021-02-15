import React from "react";

interface Props {}

export const New: React.FC<Props> = ({}) => (
  <div>
    <section>
      <h1>Create a new repository</h1>
      <p>
        A repository contains all project files, including the revision history.
        Already have a project repository elsewhere?{" "}
      </p>
      <a href="https://github.com/new/import">Import a repository.</a>
    </section>

    <section>
      <div className="grid grid-cols-3">
        <p className="col-span-2">
          Owner <span>*</span>
        </p>
        <p>
          Repository name <span>*</span>
        </p>
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
