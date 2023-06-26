# Contember Implementation Exercise

## these are my notes to the exercise

- setup - DONE & running
- TailwindCSS
  - already installed;
  - I need better description what "Incorporate" means
- Menu Modification
  - just commented
  - good old KISS
- Page Enhancement:
  - "open detail" column makes no sense
  - https://github.com/contember/interface needs a better docs 
    - it's missing something like "className" property to set tailwind nicely to `cui-table-row` etc
    - like https://headlessui.com/react/ does
    - or https://github.com/vueform/multiselect#basic-props - classes prop (I know it's a vue but my biggest experience with tailwind/windi comes from vue)
    - `onEntityClick` makes it look better... but I need to router it programmatically - you have created your own good job @matej21 and @JanTvrdik
    - +1 for docs :) https://docs.contember.com/reference/admin/pages/links/#useredirect-hook
      - looks good, doesn't work :D - `Cannot use data binding routing parameters in non-databinding context` 
      - now I need to know how to use the entity context
      - @contember/binding seems to be closed source; OK; I'm not going to debug it based on  https://registry.npmjs.org/@contember/binding
      - desired outcome could be seen at `admin/pages/admin/event/list.tsx`
    - OK I think I found an ugly solution 
      - more problems appeared; previous take is in git history
      - less desired outcome could be seen at `admin/pages/admin/event/list.tsx`
  - "replace ID with names for better human readability"
    - only ID in use I see is the one in url - can be replaced but only unique field in data model is `unique_ClubMember_email_98a11f`
  - other UI improvements:
    - edited `admin/pages/admin/clubMember/detail.tsx` - the slot.back looks bad and breaks the schema
    - well I can create my own slot so as `admin/components/Slots.tsx` says, but @contember/layout is closed source :)
    - would change the horizontal line in the menu
      - `<span class="cui-layout-chrome-bar-body-scrolled-indicator"></span>` takes space, messing css
      - `<li class="cui-menu-section is-expanded" tabindex="-2" aria-disabled="true"> ... </li>` has a messy bottom border at ::after
      - should use `left: var(--cui-edge-offset-left);` and  `right: var(--cui-edge-offset-right);` that is title bar using
- Registration Facilitation:
  - nice took 2 minutes but now I see the Id problem in the form addressed earlier :D
  - fixing the names vs ids 2 more minutes;
  - nicely done... But it needs to be changed through 3 pages...
  - btw what led you to use the url path for the users of structure? every new role increases size of the app. Better routing could handle it without code duplication. Changed only the admin section.
  - BTW the task is unclear: "registration of new members" could mean creating new members directly for the event - the new one would be automatically assigned to the event.
  - it would use `MultiEditScopeProps` I guess but the docs are silent about this. + more data binding fun.
 - [Bonus Task 1]:
  - once I understood the binding and data model a bit more it was pretty easy
  - good job creating creating it. Entity suggestions would be nice :D
 - [Bonus Task 1]:
  - what is your way of debugging when dev messes up the migration?
  - anyway migrations are a great thing ;)