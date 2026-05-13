export type AppointmentType = {
  id: number;
  name: string;
  parent_type: string;
  parent_id: number;
  minutes: number;
  bookable_online: boolean;
};

// PARAMS

export type GetAppointmentTypeQueryParams = {
  subdomain: string;
  location_id?: number;
  include?: AppointmentTypeInclude[];
};

export type ListAppointmentTypesQueryParams = {
  subdomain: string;
  location_id?: number;
  include?: AppointmentTypeInclude[];
};

export type AppointmentTypeInclude = 'descriptors';

export type CreateAppointmentTypeQueryParams = {
  subdomain: string;
};

export type CreateAppointmentTypeBodyParams = {
  location_id?: number;
  appointment_type: {
    name: string;
    minutes?: number;
    parent_type?: 'institution' | 'location';
    parent_id?: number;
    bookable_online?: boolean;
    emr_appt_descriptor_ids?: number[];
  };
};

export type UpdateAppointmentTypeQueryParams = {
  subdomain: string;
};

export type UpdateAppointmentTypeBodyParams = {
  location_id?: number;
  appointment_type: {
    name?: string;
    minutes?: number;
    parent_type?: 'institution' | 'location';
    parent_id?: number;
    bookable_online?: boolean;
    emr_appt_descriptor_ids?: number[];
  };
};

export type DeleteAppointmentTypeQueryParams = {
  subdomain: string;
  location_id?: number;
};

export type ListAppointmentTypeDescriptorsQueryParams = {
  subdomain: string;
  location_id?: number;
  descriptor_type?: string;
};
