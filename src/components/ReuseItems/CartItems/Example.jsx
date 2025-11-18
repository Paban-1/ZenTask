import React from "react";
import {BlocakInTextCard} from "../../../constants";

export default function Example() {
  return (
    <div className="flex items-center justify-center bg-neutral-100 px-8 py-24 text-neutral-800">
      <BlocakInTextCard
        tag="/ Support"
        text={
          <>
            <strong>Have questions?</strong> We'd love to help! Contact support
            for any issue you may face.
          </>
        }
        examples={[
          "Does your product work for SMBs?",
          "Can I pause my membership without losing my data?",
          "How does seat based pricing work?",
          "What's the meaning of life?",
        ]}
      />
    </div>
  );
}
