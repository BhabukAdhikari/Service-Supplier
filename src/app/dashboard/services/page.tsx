import * as React from 'react';
import type { Metadata } from 'next';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Download as DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import { Upload as UploadIcon } from '@phosphor-icons/react/dist/ssr/Upload';
import dayjs from 'dayjs';

import { config } from '@/config';
import { ServiceTable } from '@/components/dashboard/services/services-table';
import type { Service } from '@/components/dashboard/services/services-table';

export const metadata = { title: `Services | Dashboard | ${config.site.name}` } satisfies Metadata;

const services = [
  {
    id: 'USR-010',
    name: 'Alcides Antonio',
    categories: 'FItness',
    subCategories: 'GYM',
    address: { city: 'Madrid', country: 'Spain', state: 'Comunidad de Madrid', street: '4158 Hedge Street' },
    phone: '984584858',
  },
  {
    id: 'USR-019',
    name: 'Alcides Antonio',
    categories: 'FItness',
    subCategories: 'GYM',
    address: { city: 'Madrid', country: 'Spain', state: 'Comunidad de Madrid', street: '4158 Hedge Street' },
    phone: '984584858',
  },
  {
    id: 'USR-008',
    name: 'Alcides Antonio',
    categories: 'FItness',
    subCategories: 'GYM',
    address: { city: 'Madrid', country: 'Spain', state: 'Comunidad de Madrid', street: '4158 Hedge Street' },
    phone: '984584858',
  },
  {
    id: 'USR-007',
    name: 'Alcides Antonio',
    categories: 'FItness',
    subCategories: 'GYM',
    address: { city: 'Madrid', country: 'Spain', state: 'Comunidad de Madrid', street: '4158 Hedge Street' },
    phone: '984584858',
  },
  {
    id: 'USR-006',
    name: 'Alcides Antonio',
    categories: 'FItness',
    subCategories: 'GYM',
    address: { city: 'Madrid', country: 'Spain', state: 'Comunidad de Madrid', street: '4158 Hedge Street' },
    phone: '984584858',
  },
  {
    id: 'USR-005',
    name: 'Alcides Antonio',
    categories: 'FItness',
    subCategories: 'GYM',
    address: { city: 'Madrid', country: 'Spain', state: 'Comunidad de Madrid', street: '4158 Hedge Street' },
    phone: '984584858',
  },

  {
    id: 'USR-004',
    name: 'Alcides Antonio',
    categories: 'FItness',
    subCategories: 'GYM',
    address: { city: 'Madrid', country: 'Spain', state: 'Comunidad de Madrid', street: '4158 Hedge Street' },
    phone: '984584858',
  },
  {
    id: 'USR-003',
    name: 'Alcides Antonio',
    categories: 'FItness',
    subCategories: 'GYM',
    address: { city: 'Madrid', country: 'Spain', state: 'Comunidad de Madrid', street: '4158 Hedge Street' },
    phone: '984584858',
  },
  {
    id: 'USR-002',
    name: 'Alcides Antonio',
    categories: 'FItness',
    subCategories: 'GYM',
    address: { city: 'Madrid', country: 'Spain', state: 'Comunidad de Madrid', street: '4158 Hedge Street' },
    phone: '984584858',
  },
  {
    id: 'USR-001',
    name: 'Alcides Antonio',
    categories: 'FItness',
    subCategories: 'GYM',
    address: { city: 'Madrid', country: 'Spain', state: 'Comunidad de Madrid', street: '4158 Hedge Street' },
    phone: '984584858',
  },
] satisfies Service[];

export default function Page(): React.JSX.Element {
  const page = 0;
  const rowsPerPage = 5;

  const paginatedServices = applyPagination(services, page, rowsPerPage);

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Services</Typography>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Button color="inherit" startIcon={<UploadIcon fontSize="var(--icon-fontSize-md)" />}>
              Import
            </Button>
            <Button color="inherit" startIcon={<DownloadIcon fontSize="var(--icon-fontSize-md)" />}>
              Export
            </Button>
          </Stack>
        </Stack>
        <div>
          <Button startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">
            Add
          </Button>
        </div>
      </Stack>
      <ServiceTable />
      <ServiceTable
        count={paginatedServices.length}
        page={page}
        rows={paginatedServices}
        rowsPerPage={rowsPerPage}
      />
    </Stack>
  );
}

function applyPagination(rows: Service[], page: number, rowsPerPage: number): Service[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
