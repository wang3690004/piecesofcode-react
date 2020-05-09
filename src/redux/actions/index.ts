export const INCREMENT_ENTHUSIASM = 'INCREMENT_ENTHUSIASM'
export type INCREMENT_ENTHUSIASM = typeof INCREMENT_ENTHUSIASM

export const DECREMENT_ENTHUSIASM = 'DECREMENT_ENTHUSIASM'
export type DECREMENT_ENTHUSIASM = typeof DECREMENT_ENTHUSIASM;
//定义 DECREMENT_ENTHUSIASM 类型是 string

export interface IncrementEnthusiasm {
    type:INCREMENT_ENTHUSIASM
}
//声明接口 IncrementEnthusiasm 是一个对象 且里面type的类型是字符串
export interface DecrementEnthusiasm {
    type : DECREMENT_ENTHUSIASM
}


export type EnthusiasmAction  = IncrementEnthusiasm | DecrementEnthusiasm


//函数incrementEnthusiasm 返回值按照 IncrementEnthusiasm的格式
export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type:INCREMENT_ENTHUSIASM
    }
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
      type: DECREMENT_ENTHUSIASM
    }
  }