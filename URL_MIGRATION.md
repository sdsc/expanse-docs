# URL Migration: Old Expanse User Guide → This Site

This document maps every public URL of the old Expanse user guide to its
location on this site, so external links keep working during and after the
migration. It is the source of truth for the redirect configuration that will
be put in place on the old page.

## Old URL space

The old guide is a single HTML page,
`https://www.sdsc.edu/systems/expanse/user_guide.html`, with exactly 14
anchors: the section containers `#narrow-wysiwyg-1` through
`#narrow-wysiwyg-14` (used by the page's own table of contents). The section
headings in the old page carry no `id` attributes, so no deeper anchors exist:
the page URL plus these 14 anchors is the complete old URL space.

## Mapping

| Old URL | Section | New URL |
| --- | --- | --- |
| `https://www.sdsc.edu/systems/expanse/user_guide.html` | (whole guide) | `https://sdsc.github.io/expanse-docs/` |
| `https://www.sdsc.edu/systems/expanse/user_guide.html#narrow-wysiwyg-1` | Technical Summary | `https://sdsc.github.io/expanse-docs/` |
| `https://www.sdsc.edu/systems/expanse/user_guide.html#narrow-wysiwyg-2` | System Access | `https://sdsc.github.io/expanse-docs/system-access` |
| `https://www.sdsc.edu/systems/expanse/user_guide.html#narrow-wysiwyg-3` | Modules | `https://sdsc.github.io/expanse-docs/modules` |
| `https://www.sdsc.edu/systems/expanse/user_guide.html#narrow-wysiwyg-4` | Account Management | `https://sdsc.github.io/expanse-docs/account-management` |
| `https://www.sdsc.edu/systems/expanse/user_guide.html#narrow-wysiwyg-5` | Job Charging | `https://sdsc.github.io/expanse-docs/job-charging` |
| `https://www.sdsc.edu/systems/expanse/user_guide.html#narrow-wysiwyg-6` | Compiling Codes | `https://sdsc.github.io/expanse-docs/compiling` |
| `https://www.sdsc.edu/systems/expanse/user_guide.html#narrow-wysiwyg-7` | Running Jobs on Expanse | `https://sdsc.github.io/expanse-docs/running-jobs` |
| `https://www.sdsc.edu/systems/expanse/user_guide.html#narrow-wysiwyg-8` | Using GPU Nodes | `https://sdsc.github.io/expanse-docs/gpu-nodes` |
| `https://www.sdsc.edu/systems/expanse/user_guide.html#narrow-wysiwyg-9` | Data Movement | `https://sdsc.github.io/expanse-docs/data-movement` |
| `https://www.sdsc.edu/systems/expanse/user_guide.html#narrow-wysiwyg-10` | Storage | `https://sdsc.github.io/expanse-docs/storage` |
| `https://www.sdsc.edu/systems/expanse/user_guide.html#narrow-wysiwyg-11` | Expanse AI Resource | `https://sdsc.github.io/expanse-docs/expanse-ai` |
| `https://www.sdsc.edu/systems/expanse/user_guide.html#narrow-wysiwyg-12` | Composable Systems | `https://sdsc.github.io/expanse-docs/composable-systems` |
| `https://www.sdsc.edu/systems/expanse/user_guide.html#narrow-wysiwyg-13` | Software | `https://sdsc.github.io/expanse-docs/software` |
| `https://www.sdsc.edu/systems/expanse/user_guide.html#narrow-wysiwyg-14` | Citations & Publications | `https://sdsc.github.io/expanse-docs/citations` |

Each mapping was verified in two directions: the section heading of every old
anchor matches the title of the target page, and every target URL returns 200
on the live site.

## Notes

- The old page cannot send per-anchor HTTP redirects (the anchor never reaches
  the server). The redirect on the old page should therefore be a small script
  that reads `window.location.hash` and forwards to the mapped page, falling
  back to the site root for unknown or empty anchors. This table is the data
  source for that script.
- Content is preserved verbatim from the old guide, with one heading-level
  exception: the old "2FA with Authenticator Authenticator (Required)"
  heading (a duplicated word inherited from the source) is published as
  "2FA with Authenticator (Required)". No other headings were renamed.
