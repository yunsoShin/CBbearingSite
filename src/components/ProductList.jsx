import React, { useRef, useState } from "react";
import "../index.css";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import Highlighter from "react-highlight-words";
import useProducts from "../hooks/useProducts";
import { handleDelete } from "../Api/firebase";
import { useAuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function ProductList() {
  const { user } = useAuthContext();
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const {
    productsQuery: { data: products },
  } = useProducts();
  const data = products;
  console.log(data);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90, color: "black" }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : "undefined" }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex] &&
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "", padding: 10 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: "20%",
      ...getColumnSearchProps("title"),
      render: (text) => (
        <div className="md:w-24  sm:w-14 overflow-hidden overflow-ellipsis whitespace-nowrap">
          {text}
        </div>
      ),
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
      width: "20%",
      ...getColumnSearchProps("brand"),
    },
    {
      title: "partNumber",
      dataIndex: "partNumber",
      key: "partNumber",
      ...getColumnSearchProps("partNumber"),
      render: (text) => (
        <div className="w-24 overflow-hidden overflow-ellipsis whitespace-nowrap">
          {text}
        </div>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      width: "8%",
      render: (text, record) => {
        return user && user.isAdmin ? (
          <Button
            className=""
            type=""
            danger
            onClick={() => handleDelete(record.id)}
          >
            Delete
          </Button>
        ) : (
          <div className=" hover:brightness-150 hover:text-white bg-slate-800  rounded-md text-center  md:w-20">
            <Link
              className="text-white text-xs md:text-lg hover:text-white"
              to="/questions"
            >
              Contact
            </Link>{" "}
          </div>
        );
      },
    },
  ];

  return (
    <div className=" overflow-auto">
      <Table
        className="min-w-fit"
        columns={columns}
        dataSource={data}
        rowKey="id"
      />
    </div>
  );
}
