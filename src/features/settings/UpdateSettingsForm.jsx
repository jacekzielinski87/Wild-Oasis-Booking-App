import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import { useSettings } from './useSettings';
import { useUpdateSetting } from './useUpdateSetting';
import Spinner from '../../ui/Spinner';
import { updateSetting } from '../../services/apiSettings';

function UpdateSettingsForm() {
  const {isLoading, settings:{
    minBookingLength, maxBookingLength, maxGuestPerBooking, BreakfestPrice} = {}
  } = useSettings();

  const {isUpdating, updateSetting} = useUpdateSetting();

  if (isLoading) return <Spinner/>

  function handleUpdate (e, field) {
    const {value} = e.target.value;
    
    if(!value) return;
    updateSetting({[field]: value})

  }

  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input type='number' id='min-nights'  defaultValue={minBookingLength} disabled={isUpdating} onBlur={e=>handleUpdate(e, 'minBookingLength')} />
      </FormRow>

      <FormRow label='Maximum nights/booking'>
        <Input type='number' id='max-nights' defaultValue={maxBookingLength} disabled={isUpdating} onBlur={e=>handleUpdate(e, 'maxBookingLength')} />
      </FormRow>

      <FormRow label='Maximum guests/booking'>
        <Input type='number' id='max-guests' defaultValue={maxGuestPerBooking} disabled={isUpdating} onBlur={e=>handleUpdate(e, 'maxGuestPerBooking')} />
      </FormRow>

      <FormRow label='Breakfast price'>
        <Input type='number' id='breakfast-price' defaultValue={BreakfestPrice} disabled={isUpdating} onBlur={e=>handleUpdate(e, 'Breakfest Price')} />
      </FormRow>

    </Form>
  );
}

export default UpdateSettingsForm;
