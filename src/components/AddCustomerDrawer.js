// AddCustomerDrawer.js
import React from 'react';
import { Drawer, Button, Select, Input, DatePicker } from 'antd';
import { MdOutlineArrowDropDown, MdOutlineClose } from 'react-icons/md';
import './AddCustomerDrawer.css';

const { Option } = Select;

const AddCustomerDrawer = ({ visible, onClose, products }) => {
  return (
    <Drawer
      title={
        <span style={{ fontSize: '24px', fontWeight: 'bold' }}>
          Add Customer
        </span>
      }
      placement="right"
      closable={false}
      onClose={onClose}
      visible={visible}
      width={400}
    >
      <div className="drawerCloseIcon" onClick={onClose}>
        <MdOutlineClose />
      </div>
      <div className="selectProduct">Select Product</div>
      <Select
        defaultValue="Select a product"
        size="large"
        style={{ width: '100%', border: '1px solid black', gap: '16px' }}
        onChange={(value) => console.log(value)}
        dropdownRender={(menu) => (
          <div>
            {menu}
            <MdOutlineArrowDropDown style={{ color: 'white' }} />
          </div>
        )}
      >
        {products.map((product) => (
          <Option key={product.id} value={product.name}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '20px', marginRight: '5px' }}
            />
            {product.name}
          </Option>
        ))}
      </Select>

      <div className="mt-2 selectProduct">
        Customer Name
        <Input
          placeholder="Enter Customer Name"
          style={{ marginTop: '10px' }}
          size="large"
        />
      </div>

      <div className="mt-2 selectProduct">
        Select Date
        <DatePicker size="large" style={{ width: '100%', marginTop: '10px' }} />
      </div>

      <div className="mt-2 selectProduct">
        Amount
        <Input size="large" placeholder="$" />
      </div>

      <div className="mt-2 selectProduct">
        Payment Mode
        <Select
          defaultValue="Select Payment Mode"
          size="large"
          style={{ width: '100%', border: '1px solid black' }}
        >
          <Option value="Transfer Bank">Transfer Bank</Option>
          <Option value="Cash on Delivery">Cash on Delivery</Option>
        </Select>
      </div>

      <div className="mt-2 selectProduct">
        Status
        <Select
          defaultValue="Select Status"
          size="large"
          style={{ width: '100%', border: '1px solid black' }}
        >
          <Option value="Delivered ">
            <button
              style={{
                border: 'none',
                borderRadius: '22px',
                padding: '0px 8px 0px 9px',
                gap: '10px',
                background: '#EBF9F1',
                color: '#1F9254',
              }}
            >
              Delivered
            </button>
          </Option>
          <Option value="Process">
            <button
              style={{
                border: 'none',
                borderRadius: '22px',
                padding: '0px 8px 0px 9px',
                gap: '10px',
                color: '#CD6200',
                background: '#FEF2E5',
              }}
            >
              Process
            </button>
          </Option>
          <Option value="Cancelled">
            <button
              style={{
                border: 'none',
                borderRadius: '22px',
                padding: '0px 8px 0px 9px',
                gap: '10px',
                color: 'black',
                background: '#FBE7E8',
              }}
            >
              Cancelled
            </button>
          </Option>
        </Select>
      </div>

      <div className="mt-5">
        <Button
          type="dark"
          size="large"
          style={{
            marginTop: '50px',
            background: 'black',
            color: 'white',
            width: '100%',
            lineHeight: '20px',
          }}
        >
          + Add
        </Button>
      </div>
    </Drawer>
  );
};

export default AddCustomerDrawer;
