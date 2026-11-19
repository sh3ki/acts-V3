# ACTS V3 — Image Asset Map

Put the new photos in `public/images/` using these filenames, or send them with clear names and update the path map in `src/data.ts`.

| Filename | What to provide | Suggested shape / use |
|---|---|---|
| `home-hero.jpg` | Students outside the college, showing student life. | Portrait; used in the homepage “Learning happens together” photo row. |
| `senior-high.jpg` | Senior High learners in a classroom, activity, or other authentic school setting. | Landscape; appears on the homepage and Programs page. |
| `college.jpg` | College students learning, collaborating, or working with technology. | Landscape; homepage program pathway. |
| `learning.jpg` | A candid teaching, study, or hands-on learning moment. | Wide landscape; homepage photo row. |
| `community.jpg` | Students or school community together at an event or shared activity. | Square or landscape; homepage photo row. |
| `campus.jpg` | ACTS building exterior. | Used as the homepage hero image. |

Use real ACTS photographs where possible. Please avoid sending images that imply an official facility, program, or school event if they are not ACTS. Original phone photos are fine; the site crops images responsively. If one image should not be cropped, tell me which one and where it should appear.

## Included and connected

- `president.avif` — the president portrait copied from the reference project as specifically allowed. No replacement portrait is needed unless you want to provide a newer one.

The six new photos are now present in `public/images/` and connected in `src/data.ts`. The campus exterior is in the hero; the student photo is in the “Learning happens together” row. The hero loads eagerly; other page photos load as needed.
