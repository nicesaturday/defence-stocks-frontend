"use client";

import { useState } from "react";
import type { TermGroup } from "@/features/terms/domain/model/termSection";
import { termGroupStyles } from "@/ui/styles/termsPageStyles";

interface TermGroupItemProps {
  termGroup: TermGroup;
}

export default function TermGroupItem({ termGroup }: TermGroupItemProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={termGroupStyles.container}>
      <div className={termGroupStyles.header}>
        <div className={termGroupStyles.nameRow}>
          <span className={termGroupStyles.name}>{termGroup.name}</span>
          <span
            className={
              termGroup.required
                ? termGroupStyles.requiredBadge
                : termGroupStyles.optionalBadge
            }
          >
            {termGroup.required ? "필수" : "선택"}
          </span>
        </div>
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className={termGroupStyles.toggleButton}
        >
          {expanded ? "접기" : "내용 보기"}
        </button>
      </div>
      {expanded && (
        <div className={termGroupStyles.content}>
          {termGroup.sections.map((section) => (
            <div key={section.title} className={termGroupStyles.section}>
              <h4 className={termGroupStyles.sectionTitle}>{section.title}</h4>
              {section.content.map((text) => (
                <p key={text} className={termGroupStyles.sectionText}>
                  {text}
                </p>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
