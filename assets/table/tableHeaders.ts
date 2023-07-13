import { tableHeader } from 'src/app/shared/models/customTable';

export const headers: tableHeader[] = [
  { id: 'campaignName', name: 'Campaign Name' },
  { id: 'campaignCode', name: 'Campaign Code' },
  { id: 'flowchartName', name: 'List Name' },
  { id: 'treatmentCode', name: 'Treatmentcode' },
  { id: 'subsCount', name: 'Contacts' },
  {
    id: 'creationDate',
    name: 'Creation Date',
    sort: true,
    sortType: 'increasing',
  },
  {
    id: 'startDate',
    name: 'Schedulation Date',
    sort: true,
    sortType: 'increasing',
  },
  { id: 'status', name: 'State' },
  { id: 'Action', name: 'Action' },
];
