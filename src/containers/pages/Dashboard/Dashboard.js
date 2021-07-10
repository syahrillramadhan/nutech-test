import React, { Component } from 'react';
import { connect } from 'react-redux';
import './formTambah.scss';
import './cardProduk.scss';
import {
  Container,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  ButtonToggle,
} from 'reactstrap';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';
import { addDataToFirebase } from '../../../config/redux/action';

class Dashboard extends Component {
  state = {
    name: '',
    image: '',
    hargaBeli: '',
    hargaJual: '',
    stok: '',
  };
  handlesimpanProduk = () => {
    const { name, image, hargaBeli, hargaJual, stok } = this.state;
    const { simpanProduk } = this.props;
    const data = {
      name: name,
      image: image,
      hargaBeli: hargaBeli,
      hargaJual: hargaJual,
      stok: stok,
    };

    simpanProduk(data);
    console.log(data);
  };

  onInputChange = (e, type) => {
    this.setState({
      [type]: e.target.value,
    });
  };
  render() {
    const { name, image, hargaBeli, hargaJual, stok } = this.state;
    return (
      <Container>
        <Form>
          <h1>Tambah Produk</h1>
          <div className='formTambah'>
            <FormGroup row>
              <Label for='namaProduk' sm={2}>
                Nama Produk
              </Label>
              <Col sm={6}>
                <Input
                  id='namaProduk'
                  placeholder=''
                  value={name}
                  onChange={(e) => this.onInputChange(e, 'name')}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Label for='exampleFile'>Photo</Label>
              <Input
                type='file'
                name='file'
                id='exampleFile'
                value={image}
                onChange={(e) => this.onInputChange(e, 'image')}
              />
            </FormGroup>
            <FormGroup row>
              <Label for='hargabeliProduk' sm={2}>
                Harga Beli
              </Label>
              <Col sm={6}>
                <Input
                  id='hargabeliProduk'
                  placeholder=''
                  value={hargaBeli}
                  onChange={(e) => this.onInputChange(e, 'hargaBeli')}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for='hargajualProduk' sm={2}>
                Harga Jual
              </Label>
              <Col sm={6}>
                <Input
                  id='hargajualProduk'
                  placeholder=''
                  value={hargaJual}
                  onChange={(e) => this.onInputChange(e, 'hargaJual')}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for='stokProduk' sm={2}>
                Stok
              </Label>
              <Col sm={6}>
                <Input
                  id='stokProduk'
                  placeholder=''
                  value={stok}
                  onChange={(e) => this.onInputChange(e, 'stok')}
                />
              </Col>
            </FormGroup>
            <ButtonToggle color='primary' onClick={this.handlesimpanProduk}>
              Kirim
            </ButtonToggle>
          </div>
        </Form>

        <div className='Card-produk'>
          <h1>Produk</h1>
          <Card>
            <CardImg
              top
              width='100%'
              src='/assets/318x180.svg'
              alt='Card image cap'
            />
            <CardBody>
              <CardTitle tag='h5'>Card title</CardTitle>
              <CardSubtitle tag='h6' className='mb-2 text-muted'>
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button>Ubah</Button>
              <Button>Hapus</Button>
            </CardBody>
          </Card>
        </div>
      </Container>
    );
  }
}

const reduxDispatch = (dispatch) => ({
  simpanProduk: (data) => dispatch(addDataToFirebase()),
});

const reduxState = (state) => ({
  dataProduk: state.produk,
});
export default connect(reduxState, reduxDispatch)(Dashboard);
