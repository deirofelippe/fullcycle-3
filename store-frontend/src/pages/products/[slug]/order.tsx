import {
   Avatar, Box, Button, Grid, ListItem, ListItemAvatar, ListItemText, TextField, Typography
} from '@material-ui/core'
import axios from 'axios'
import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import http from '../../../http'
import { CreditCard, Product } from '../../../model'
import { useForm } from 'react-hook-form';

interface OrderPageProps {
   product: Product
}

const OrderPage: NextPage<OrderPageProps> = ({ product }) => {
   const { register, handleSubmit, setValue } = useForm()

   const onSubmit = async (data: CreditCard) => {
      const { data: order } = await http.post("orders", {
         credit_card: data,
         items: [{ product_id: product.id, quantity: 1 }]
      })
      
      console.log(data);
   }

   return (
      <div>
         <Head>
            <title>Pagamento</title>
         </Head>
         <Typography component="h1" variant="h3" color="textPrimary" gutterBottom>
            Checkout
         </Typography>
         <ListItem>
            <ListItemAvatar>
               <Avatar src={product.image_url} />
            </ListItemAvatar>
            <ListItemText
               primary={product.name}
               secondary={`R$ ${product.price}`}
            />
         </ListItem>
         <Typography component="h2" variant="h6" gutterBottom>
            Pague com cartão de crédito
         </Typography>
         <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={6}>
               <Grid item xs={12} md={6}>
                  <TextField {...register('name')} required label="Nome" fullWidth />
               </Grid>
               <Grid item xs={12} md={6}>
                  <TextField {...register('number')} required label="Número do cartão" fullWidth inputProps={{ maxLength: 16 }} />
               </Grid>
               <Grid item xs={12} md={6}>
                  <TextField {...register('cvv')} type="number" required label="CVV" fullWidth />
               </Grid>
               <Grid item xs={12} md={6}>
                  <Grid container spacing={3}>
                     <Grid item xs={6}>
                        <TextField
                           {...register('expiration_month')}
                           onChange={e =>
                              setValue("expiration_month", parseInt(e.target.value))
                           }
                           type="number"
                           required
                           label="Expiração mês"
                           fullWidth />
                     </Grid>
                     <Grid item xs={6}>
                        <TextField
                           {...register('expiration_year')}
                           onChange={e =>
                              setValue("expiration_year", parseInt(e.target.value))
                           }
                           type="number"
                           required
                           label="Expiração ano"
                           fullWidth />
                     </Grid>
                  </Grid>
               </Grid>
            </Grid>
            <Box marginTop={3}>
               <Button type="submit" variant="contained" color="primary" fullWidth>
                  Pagar
               </Button>
            </Box>
         </form>
      </div>
   );
}

export default OrderPage;

export const getServerSideProps: GetServerSideProps<OrderPageProps, { slug: string }> = async context => {
   const { slug } = context.params!
   try {
      const { data: product } = await http.get(`products/${slug}`)

      return {
         props: {
            product
         },
      }
   } catch (e) {
      if (axios.isAxiosError(e) && e.response?.status === 404) {
         return { notFound: true }
      }
      throw e
   }
}