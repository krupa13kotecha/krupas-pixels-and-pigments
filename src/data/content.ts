/**
 * ✏️ EDIT YOUR CONTENT HERE
 * Add a project or artwork by adding an object to the arrays below.
 * Replace `image` / `media` with a real URL when you have one (leave undefined for a placeholder).
 */

export const EMAIL = "krupa13kotecha@gmail.com";
export const INSTAGRAM = "https://instagram.com/whimsyy__waterart";

export const socials = {
  github: "#",
  linkedin: "#",
  substack: "#",
  email: `mailto:${EMAIL}`,
  instagram: INSTAGRAM,
};

export type Project = {
  title: string;
  summary: string;
  description: string;
  learned: string;
  stack: string[];
  github: string;
  media?: string; // image URL
  video?: string; // video URL
};

export const projects: Project[] = [
  {
    title: "Resume Parser and Recruitment Platform",
    summary:
      "A dual-portal web app that scores resumes and helps recruiters rank and shortlist candidates using ML.",
    description:
      "Candidates upload a resume to get an ATS score, skill analysis, and feedback. Recruiters bulk upload resumes, get AI-based rankings, and compare shortlisted candidates. Resume text is extracted with PyMuPDF and classified by job domain using a Random Forest with TF-IDF. A hybrid score (50% rule-based, 50% model confidence) keeps results explainable. A Node.js/Express API connects the Python parser to the frontend.",
    learned:
      "End-to-end ML pipelines, text classification with scikit-learn, designing explainable scoring, and connecting a Python backend to a Node.js API.",
    stack: ["Python", "Node.js", "scikit-learn", "PyMuPDF", "HTML/CSS/JS"],
    github: "#",
  },
  {
    title: "Handwritten Answerscript Evaluation",
    summary: "An AI platform that reads handwritten answers and grades them automatically.",
    description:
      "Handwritten answers are preprocessed with OpenCV and converted to text by a CRNN-based recognition model. The text is then scored using semantic similarity and keyword matching, so grading rewards meaning and not just exact wording. A React frontend, Node/Express APIs, and Python ML models run as one workflow.",
    learned:
      "OCR and image preprocessing, building a CRNN with TensorFlow, NLP-based answer scoring, and integrating ML models into a full-stack app.",
    stack: ["Python", "React.js", "Node.js", "TensorFlow", "OpenCV", "OCR", "NLP"],
    github: "#",
  },
];

export type Medium = "watercolor" | "canvas" | "resin" | "pottery";

export type Artwork = {
  title: string;
  description: string;
  medium: Medium;
  image?: string;
};

const ph = (medium: Medium, n: number, label: string): Artwork[] =>
  Array.from({ length: n }, (_, i) => ({
    medium,
    title: `${label} piece ${i + 1}`,
    description: "A short note about this piece — replace me with the real story.",
  }));

export const artworks: Artwork[] = [
  ...ph("watercolor", 8, "Watercolor"),
  ...ph("canvas", 2, "Canvas"),
  ...ph("resin", 1, "Resin"),
  ...ph("pottery", 2, "Pottery"),
];

export const mediumSections: { id: Medium; title: string; band: boolean; note?: string }[] = [
  { id: "watercolor", title: "Watercolor", band: true, note: "where I truly belong" },
  { id: "canvas", title: "Canvas", band: false },
  { id: "resin", title: "Resin Art", band: true },
  { id: "pottery", title: "Pottery", band: false },
];
