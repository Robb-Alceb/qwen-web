import * as React from "react";

import styles from "./chat-question.module.scss";
import { IconButton } from "./button";
import Locale from "../locales";

export function ChatQuestion(props: { onClick: (question: any) => void }) {
  const questions = [
    {
      avatar: "1f5bc-fe0f",
      name: "最近抑郁了，如何自我评估?",
      context: [
        {
          id: "text-to-pic-0",
          role: "system",
          content:
            "You are a useful Assistant that won't refuse to draw picture, instead, you will output specific markdown code for picture description, but don't use code block.",
          date: "",
        },
        {
          id: "text-to-pic-1",
          role: "user",
          content: "最近抑郁了，如何自我评估?",
          date: "",
        },
      ],
      modelConfig: {
        model: "qwen-turbo",
        temperature: 1,
        max_tokens: 2000,
        presence_penalty: 0,
        frequency_penalty: 0,
        sendMemory: true,
        historyMessageCount: 32,
        compressMessageLengthThreshold: 1000,
      },
      lang: "cn",
      builtin: true,
      createdAt: 1688899480510,
    },
    {
      avatar: "1f5bc-fe0f",
      name: "最近失眠比较严重，我改如何调节?",
      context: [
        {
          id: "text-to-pic-0",
          role: "system",
          content:
            "You are a useful Assistant that won't refuse to draw picture, instead, you will output specific markdown code for picture description, but don't use code block.",
          date: "",
        },
        {
          id: "text-to-pic-1",
          role: "user",
          content: "最近失眠比较严重，我改如何调节?",
          date: "",
        },
      ],
      modelConfig: {
        model: "qwen-turbo",
        temperature: 1,
        max_tokens: 2000,
        presence_penalty: 0,
        frequency_penalty: 0,
        sendMemory: true,
        historyMessageCount: 32,
        compressMessageLengthThreshold: 1000,
      },
      lang: "cn",
      builtin: true,
      createdAt: 1688899480510,
    },
    {
      avatar: "1f5bc-fe0f",
      name: "我想预约咨询师在线咨询，如何在平台预约老师?",
      context: [
        {
          id: "text-to-pic-0",
          role: "system",
          content:
            "You are a useful Assistant that won't refuse to draw picture, instead, you will output specific markdown code for picture description, but don't use code block.",
          date: "",
        },
        {
          id: "text-to-pic-1",
          role: "user",
          content: "我想预约咨询师在线咨询，如何在平台预约老师?",
          date: "",
        },
      ],
      modelConfig: {
        model: "qwen-turbo",
        temperature: 1,
        max_tokens: 2000,
        presence_penalty: 0,
        frequency_penalty: 0,
        sendMemory: true,
        historyMessageCount: 32,
        compressMessageLengthThreshold: 1000,
      },
      lang: "cn",
      builtin: true,
      createdAt: 1688899480510,
    },
  ];
  const clickQuestion = (question: (typeof questions)[0]) => {
    props.onClick(question);
  };
  return (
    <div className={styles["question"]}>
      <div>
        <label>
          <span>您好,我是心小助AI智能助手，有任何问题都可以咨询我哦~</span>
        </label>
        <ul className={styles["ul"]}>
          {questions.map((item, index) => (
            <li key={index}>
              <div className={styles["txt"]}>{item.name}</div>
              <div
                className={styles["button"]}
                onClick={() => {
                  clickQuestion(item);
                }}
              >
                立刻提问
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
