import * as yup from 'yup';
const formSchema = yup.object().shape({
    name: yup.string()
        .required('a name is required to place an order')
        .trim()
        .min(2, 'name must be at least 2 characters'),
    size: yup.string().oneOf(['8', '12', '16'], 'must select a size')
})
export default formSchema;