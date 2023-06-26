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