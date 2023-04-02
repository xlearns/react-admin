import React, { useState } from "react";
import { Button, Card, Checkbox, Collapse } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { useUpdateEffect } from "ahooks";

const { Panel } = Collapse;
const CheckboxGroup = Checkbox.Group;

type CheckConfig = {
  checkedList: CheckboxValueType[];
  children: { title: string; value: string }[];
  title: string;
  value: string;
}[];

const list = [
  {
    title: "one",
    value: "one",
    checkedList: ["a"],
    children: [
      {
        title: "one-a",
        value: "a",
      },
      {
        title: "one-b",
        value: "b",
      },
    ],
  },
  {
    title: "two",
    value: "two",
    checkedList: [],
    children: [
      {
        title: "two-a",
        value: "a",
      },
      {
        title: "two-b",
        value: "b",
      },
    ],
  },
  {
    title: "three",
    value: "three",
    checkedList: [],
    children: [],
  },
];
const Home = () => {
  const [checkConfig, setCheckConfig] = useState<CheckConfig>(list);

  useUpdateEffect(() => {
    console.log(checkConfig);
  }, [checkConfig]);

  return (
    <Card className="w-[500px] mx-[auto] my-[20px]">
      <div className="mb-[10px]">
        <Button
          onClick={() => {
            setCheckConfig((item) => {
              return item.map((_item) => {
                return {
                  ..._item,
                  checkedList:
                    _item.children.length != 0
                      ? _item.children.map((_) => _.value)
                      : [_item.value],
                };
              });
            });
          }}
        >
          全选
        </Button>
        <Button
          onClick={() => {
            setCheckConfig((item) => {
              return item.map((_item) => {
                return {
                  ..._item,
                  checkedList: [],
                };
              });
            });
          }}
        >
          取消
        </Button>
      </div>
      <Collapse defaultActiveKey={list.map((item, index) => index + 1)}>
        {checkConfig.map((item, index) => {
          return item.children.length > 0 ? (
            <Panel
              collapsible="icon"
              header={
                <Checkbox
                  indeterminate={
                    !!item.checkedList.length &&
                    item.checkedList.length < item.children.length
                  }
                  onChange={(e) => {
                    setCheckConfig((_item) => {
                      const attr = [..._item];
                      attr[index].checkedList = e.target.checked
                        ? item.children.map((_) => _.value)
                        : [];
                      return attr;
                    });
                  }}
                  checked={item.checkedList.length === item.children.length}
                >
                  {item?.title || ""}
                </Checkbox>
              }
              key={index + 1}
            >
              <CheckboxGroup
                value={item.checkedList}
                onChange={(value) => {
                  setCheckConfig((_item) => {
                    const attr = [..._item];
                    attr[index].checkedList = value;
                    return attr;
                  });
                }}
              >
                {checkConfig[index].children.map((_item, _index) => {
                  return (
                    <Checkbox key={_index} value={_item.value}>
                      {_item.title}
                    </Checkbox>
                  );
                })}
              </CheckboxGroup>
            </Panel>
          ) : (
            <div
              key={index + 1}
              className="ant-collapse-item h-[46px] flex items-center pl-[40px] border-box"
            >
              <Checkbox
                onChange={(e) => {
                  setCheckConfig((_item) => {
                    const attr = [..._item];
                    attr[index].checkedList = e.target.checked
                      ? [item.value]
                      : [];
                    return attr;
                  });
                }}
                checked={item.checkedList[0] as boolean}
              >
                {item?.title || ""}
              </Checkbox>
            </div>
          );
        })}
      </Collapse>
    </Card>
  );
};

export default Home;
