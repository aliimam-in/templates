"use client";

import {
  ClaudeAI,
  Cursor,
  DeepSeek,
  Gemini,
  Github,
  Google,
  Grok,
  OpenAI,
  Replicate,
  XAIGrok,
} from "@aliimam/logos";

export function Logos() {
  return (
    <div className="flex w-full flex-col border items-center justify-center p-6 md:p-10">
      <div className="flex flex-wrap h-full w-full items-center justify-center gap-x-12 gap-y-6">
        <OpenAI type="wordmark" size={80} height={40} />
        <ClaudeAI type="wordmark" size={80} height={30} />
        <Replicate type="wordmark" size={80} height={30} />
        <Cursor type="wordmark" size={80} height={25} />
        <Github type="wordmark" size={80} height={18} />
        <Grok type="wordmark" size={80} height={40} />
        <Gemini type="wordmark" size={80} height={25} />
        <Google type="wordmark" size={80} height={40} />  
      </div>
    </div>
  );
}
