import { FieldConfig } from "../types/field-config.type";
import { SelectOption } from "../../../../shared/models/types/select-options.type";

function randomId() {
  return crypto.randomUUID();
}

const skillLevelOptions: SelectOption[] = [
  { id: randomId(), value: 'basic', label: 'Basic' },
  { id: randomId(), value: 'intermediate', label: 'Intermediate' },
  { id: randomId(), value: 'advanced', label: 'Advanced' },
  { id: randomId(), value: 'expert', label: 'Expert' },
];

const languageLevelOptions: SelectOption[] = [
  { id: randomId(), value: 'beginner', label: 'Beginner' },
  { id: randomId(), value: 'intermediate', label: 'Intermediate' },
  { id: randomId(), value: 'advanced', label: 'Advanced' },
  { id: randomId(), value: 'native', label: 'Native' },
];

export const SectionDictionary: Record<string, FieldConfig[]> = {
  profile: [
    { id: randomId(), name: "description", type: "textarea" },
  ],
  workExperience: [
    { id: randomId(), name: "position", type: "text" },
    { id: randomId(), name: "city", type: "text" },
    { id: randomId(), name: "employer", type: "text" },
    { id: randomId(), name: "start date", type: "date" },
    { id: randomId(), name: "end date", type: "date" },
    { id: randomId(), name: "description", type: "textarea", options: skillLevelOptions },
  ],
  education: [
    { id: randomId(), name: "degree", type: "text" },
    { id: randomId(), name: "city", type: "text" },
    { id: randomId(), name: "institution", type: "text" },
    { id: randomId(), name: "start date", type: "date" },
    { id: randomId(), name: "end date", type: "date" },
    { id: randomId(), name: "description", type: "textarea" },
  ],
  languages: [
    { id: randomId(), name: "language", type: "text" },
    { id: randomId(), name: "level", type: "select", options: languageLevelOptions },
  ],
  courses: [
    { id: randomId(), name: "course", type: "text" },
    { id: randomId(), name: "institution", type: "text" },
    { id: randomId(), name: "start date", type: "date" },
    { id: randomId(), name: "end date", type: "date" },
    { id: randomId(), name: "description", type: "textarea" },
  ],
  achievements: [
    { id: randomId(), name: "description", type: "textarea" },
  ],
  interests: [
    { id: randomId(), name: "hobby", type: "text" },
  ],
  references: [
    { id: randomId(), name: "company", type: "text" },
    { id: randomId(), name: "contactPerson", type: "text" },
    { id: randomId(), name: "phone", type: "text" },
    { id: randomId(), name: "email", type: "text" },
  ],
  skills: [
    { id: randomId(), name: "skill", type: "text" },
    { id: randomId(), name: "level", type: "select", options: skillLevelOptions },
  ],
};
