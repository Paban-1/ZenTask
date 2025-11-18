import React from "react";
import {TypeWrite} from "../../../constants"

export default function BlockInTextCard({ tag, text, examples }) {
  return (
    <div className="w-full max-w-xl space-y-6">
      <div>
        <p className="mb-1.5 text-sm font-light uppercase">{tag}</p>
        <hr className="border-neutral-700" />
      </div>

      <p className="max-w-lg text-xl leading-relaxed">{text}</p>

      <div>
        <TypeWrite examples={examples} />
        <hr className="border-neutral-300" />
      </div>

      <button className="w-full rounded-full border border-neutral-950 py-2 text-sm font-medium transition-colors hover:bg-neutral-950 hover:text-neutral-100">
        Contact Support
      </button>
    </div>
  );
}
