import { type SvgIconTypeMap } from '@mui/material';
import { type OverridableComponent } from '@mui/material/OverridableComponent';

export type IconName =
  | 'account-circle'
  | 'add'
  | 'arrow-back'
  | 'arrow-down'
  | 'arrow-forward'
  | 'arrow-up'
  | 'article'
  | 'chat'
  | 'check'
  | 'close'
  | 'cloud-upload'
  | 'delete'
  | 'email'
  | 'file'
  | 'hand'
  | 'info'
  | 'label'
  | 'line-weight'
  | 'list'
  | 'menu'
  | 'message'
  | 'pencil'
  | 'photo'
  | 'preview'
  | 'pencil-edit'
  | 'schedule'
  | 'search'
  | 'sms'
  | 'visibility'
  | 'visibility-off'
  | 'warning';

export type IconMapper = Record<
  IconName,
  OverridableComponent<SvgIconTypeMap<object, 'svg'>> & {
    muiName: string;
  }
>;
