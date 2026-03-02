import { PROJECTS } from "./projects";

describe("projects data", () => {
  test("exports array of projects", () => {
    expect(Array.isArray(PROJECTS)).toBe(true);
    expect(PROJECTS.length).toBeGreaterThan(0);
  });

  test("each project has required fields", () => {
    PROJECTS.forEach((project) => {
      expect(project).toHaveProperty("id");
      expect(project).toHaveProperty("title");
      expect(project).toHaveProperty("description");
      expect(project).toHaveProperty("tech");
      expect(project).toHaveProperty("link");
      expect(project).toHaveProperty("image");
      expect(project).toHaveProperty("imageAlt");
    });
  });

  test("project links are valid URLs", () => {
    PROJECTS.forEach((project) => {
      expect(project.link).toMatch(/^https?:\/\//);
    });
  });

  test("project tech is array of strings", () => {
    PROJECTS.forEach((project) => {
      expect(Array.isArray(project.tech)).toBe(true);
      project.tech.forEach((t) => expect(typeof t).toBe("string"));
    });
  });
});
