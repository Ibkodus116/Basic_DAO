// Automatically generated with Reach 0.1.11 (2d125008)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (2d125008)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Bool;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      2: [ctc0, ctc1, ctc0, ctc1],
      3: [ctc0, ctc0, ctc0, ctc2, ctc2, ctc3, ctc4, ctc3, ctc4],
      4: [ctc0, ctc0, ctc0, ctc2, ctc2, ctc3, ctc4, ctc3, ctc4],
      5: [ctc0, ctc0, ctc0, ctc2, ctc2, ctc3, ctc4, ctc3, ctc4, ctc0, ctc4, ctc4, ctc2],
      7: [ctc0, ctc0, ctc0, ctc2, ctc2, ctc3, ctc4, ctc3, ctc4, ctc0, ctc4, ctc4, ctc2],
      8: [ctc0, ctc0, ctc0, ctc2, ctc3, ctc4, ctc3, ctc4, ctc4, ctc4, ctc2, ctc2],
      10: [ctc0, ctc0, ctc2, ctc3, ctc4, ctc3, ctc4, ctc4, ctc4, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Proposer1(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Proposer1 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Proposer1 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc0]);
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Digest;
  const ctc6 = stdlib.T_Bool;
  
  
  const v327 = stdlib.protect(ctc0, await interact.proposeIdea(), {
    at: './index.rsh:53:48:application',
    fs: ['at ./index.rsh:52:15:application call to [unknown function] (defined at: ./index.rsh:52:19:function exp)'],
    msg: 'proposeIdea',
    who: 'Proposer1'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v327],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:55:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:55:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v329], secs: v331, time: v330, didSend: v29, from: v328 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v329], secs: v331, time: v330, didSend: v29, from: v328 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v336], secs: v338, time: v337, didSend: v38, from: v335 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 2,
    out_tys: [ctc1, ctc1, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v357, v358, v359], secs: v361, time: v360, didSend: v63, from: v356 } = txn3;
  ;
  const v362 = stdlib.digest(ctc2, [v359]);
  const v363 = stdlib.digest(ctc2, [v329]);
  const v364 = stdlib.digestEq(v362, v363);
  const v366 = stdlib.digest(ctc2, [v336]);
  const v367 = stdlib.digestEq(v362, v366);
  const v368 = v364 ? true : v367;
  stdlib.assert(v368, {
    at: './index.rsh:82:10:application',
    fs: [],
    msg: null,
    who: 'Proposer1'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v371, time: v370, didSend: v77, from: v369 } = txn4;
  ;
  const v374 = stdlib.addressEq(v356, v369);
  stdlib.assert(v374, {
    at: './index.rsh:84:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Proposer1'
    });
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 4,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v393], secs: v395, time: v394, didSend: v100, from: v392 } = txn5;
  ;
  const v396 = stdlib.digest(ctc2, [v393]);
  const v398 = stdlib.digestEq(v396, v363);
  const v401 = stdlib.digestEq(v396, v366);
  const v402 = v398 ? true : v401;
  stdlib.assert(v402, {
    at: './index.rsh:97:8:application',
    fs: [],
    msg: null,
    who: 'Proposer1'
    });
  const v409 = stdlib.add(v394, v358);
  const txn6 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 5,
    out_tys: [],
    timeoutAt: ['time', v409],
    waitIfNotPresent: false
    }));
  if (txn6.didTimeout) {
    const txn7 = await (ctc.sendrecv({
      args: [v328, v335, v356, v357, v358, v363, v364, v366, v367, v392, v398, v401, v409],
      evt_cnt: 0,
      funcNum: 6,
      lct: v394,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn7) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v645, time: v644, didSend: v297, from: v643 } = txn7;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v356,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc4, ctc4, ctc1, ctc1, ctc5, ctc6, ctc5, ctc6, ctc4, ctc6, ctc6, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v645, time: v644, didSend: v297, from: v643 } = txn7;
    ;
    ;
    return;
    
    }
  else {
    const {data: [], secs: v413, time: v412, didSend: v114, from: v411 } = txn6;
    const v415 = stdlib.add(v357, v357);
    ;
    const v416 = stdlib.addressEq(v392, v411);
    stdlib.assert(v416, {
      at: './index.rsh:99:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Proposer1'
      });
    const txn7 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 7,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v419, time: v418, didSend: v119, from: v417 } = txn7;
    ;
    const v420 = stdlib.addressEq(v392, v417);
    stdlib.assert(v420, {
      at: './index.rsh:102:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Proposer1'
      });
    const v427 = stdlib.add(v418, v358);
    const txn8 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 8,
      out_tys: [],
      timeoutAt: ['time', v427],
      waitIfNotPresent: false
      }));
    if (txn8.didTimeout) {
      const txn9 = await (ctc.sendrecv({
        args: [v328, v335, v356, v357, v363, v364, v366, v367, v398, v401, v415, v427],
        evt_cnt: 0,
        funcNum: 9,
        lct: v418,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn9) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v628, time: v627, didSend: v263, from: v626 } = txn9;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v356,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc4, ctc4, ctc4, ctc1, ctc5, ctc6, ctc5, ctc6, ctc6, ctc6, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v628, time: v627, didSend: v263, from: v626 } = txn9;
      ;
      ;
      return;
      
      }
    else {
      const {data: [], secs: v448, time: v447, didSend: v143, from: v446 } = txn8;
      ;
      const txn9 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 10,
        out_tys: [ctc0],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v452], secs: v454, time: v453, didSend: v149, from: v451 } = txn9;
      ;
      const v455 = stdlib.addressEq(v446, v451);
      stdlib.assert(v455, {
        at: './index.rsh:118:7:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Proposer1'
        });
      const v456 = stdlib.digest(ctc2, [v452]);
      const v458 = stdlib.digestEq(v456, v363);
      const v461 = stdlib.digestEq(v456, v366);
      const v462 = v458 ? true : v461;
      stdlib.assert(v462, {
        at: './index.rsh:119:8:application',
        fs: [],
        msg: null,
        who: 'Proposer1'
        });
      const v469 = v364 ? v398 : false;
      if (v469) {
        const v470 = stdlib.mul(v357, stdlib.checkedBigNumberify('./index.rsh:123:56:decimal', stdlib.UInt_max, '3'));
        ;
        stdlib.protect(ctc3, await interact.seeOutcome(v359, v393, v452), {
          at: './index.rsh:47:24:application',
          fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:55:function exp)', 'at ./index.rsh:131:11:application call to "seeOutcome" (defined at: ./index.rsh:45:42:function exp)'],
          msg: 'seeOutcome',
          who: 'Proposer1'
          });
        
        return;
        }
      else {
        const v494 = v367 ? v401 : false;
        if (v494) {
          const v495 = stdlib.mul(v357, stdlib.checkedBigNumberify('./index.rsh:124:60:decimal', stdlib.UInt_max, '3'));
          ;
          stdlib.protect(ctc3, await interact.seeOutcome(v359, v393, v452), {
            at: './index.rsh:47:24:application',
            fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:55:function exp)', 'at ./index.rsh:131:11:application call to "seeOutcome" (defined at: ./index.rsh:45:42:function exp)'],
            msg: 'seeOutcome',
            who: 'Proposer1'
            });
          
          return;
          }
        else {
          const v519 = v364 ? v458 : false;
          if (v519) {
            const v520 = stdlib.mul(v357, stdlib.checkedBigNumberify('./index.rsh:125:60:decimal', stdlib.UInt_max, '3'));
            ;
            stdlib.protect(ctc3, await interact.seeOutcome(v359, v393, v452), {
              at: './index.rsh:47:24:application',
              fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:55:function exp)', 'at ./index.rsh:131:11:application call to "seeOutcome" (defined at: ./index.rsh:45:42:function exp)'],
              msg: 'seeOutcome',
              who: 'Proposer1'
              });
            
            return;
            }
          else {
            const v544 = v367 ? v461 : false;
            if (v544) {
              const v545 = stdlib.mul(v357, stdlib.checkedBigNumberify('./index.rsh:126:60:decimal', stdlib.UInt_max, '3'));
              ;
              stdlib.protect(ctc3, await interact.seeOutcome(v359, v393, v452), {
                at: './index.rsh:47:24:application',
                fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:55:function exp)', 'at ./index.rsh:131:11:application call to "seeOutcome" (defined at: ./index.rsh:45:42:function exp)'],
                msg: 'seeOutcome',
                who: 'Proposer1'
                });
              
              return;
              }
            else {
              const v569 = v401 ? v461 : false;
              if (v569) {
                const v570 = stdlib.mul(v357, stdlib.checkedBigNumberify('./index.rsh:127:60:decimal', stdlib.UInt_max, '3'));
                ;
                stdlib.protect(ctc3, await interact.seeOutcome(v359, v393, v452), {
                  at: './index.rsh:47:24:application',
                  fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:55:function exp)', 'at ./index.rsh:131:11:application call to "seeOutcome" (defined at: ./index.rsh:45:42:function exp)'],
                  msg: 'seeOutcome',
                  who: 'Proposer1'
                  });
                
                return;
                }
              else {
                const v594 = v398 ? v458 : false;
                if (v594) {
                  const v595 = stdlib.mul(v357, stdlib.checkedBigNumberify('./index.rsh:128:60:decimal', stdlib.UInt_max, '3'));
                  ;
                  stdlib.protect(ctc3, await interact.seeOutcome(v359, v393, v452), {
                    at: './index.rsh:47:24:application',
                    fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:55:function exp)', 'at ./index.rsh:131:11:application call to "seeOutcome" (defined at: ./index.rsh:45:42:function exp)'],
                    msg: 'seeOutcome',
                    who: 'Proposer1'
                    });
                  
                  return;
                  }
                else {
                  stdlib.protect(ctc3, await interact.seeOutcome(v359, v393, v452), {
                    at: './index.rsh:47:24:application',
                    fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:55:function exp)', 'at ./index.rsh:131:11:application call to "seeOutcome" (defined at: ./index.rsh:45:42:function exp)'],
                    msg: 'seeOutcome',
                    who: 'Proposer1'
                    });
                  
                  return;
                  }}}}}}
      
      }
    
    
    
    }
  
  
  
  
  
  
  
  
  
  
  
  };
export async function Proposer2(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Proposer2 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Proposer2 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc0]);
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Digest;
  const ctc6 = stdlib.T_Bool;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v329], secs: v331, time: v330, didSend: v29, from: v328 } = txn1;
  ;
  const v334 = stdlib.protect(ctc0, await interact.proposeIdea(), {
    at: './index.rsh:60:48:application',
    fs: ['at ./index.rsh:59:15:application call to [unknown function] (defined at: ./index.rsh:59:19:function exp)'],
    msg: 'proposeIdea',
    who: 'Proposer2'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v328, v329, v334],
    evt_cnt: 1,
    funcNum: 1,
    lct: v330,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:63:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v336], secs: v338, time: v337, didSend: v38, from: v335 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v336], secs: v338, time: v337, didSend: v38, from: v335 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 2,
    out_tys: [ctc1, ctc1, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v357, v358, v359], secs: v361, time: v360, didSend: v63, from: v356 } = txn3;
  ;
  const v362 = stdlib.digest(ctc2, [v359]);
  const v363 = stdlib.digest(ctc2, [v329]);
  const v364 = stdlib.digestEq(v362, v363);
  const v366 = stdlib.digest(ctc2, [v336]);
  const v367 = stdlib.digestEq(v362, v366);
  const v368 = v364 ? true : v367;
  stdlib.assert(v368, {
    at: './index.rsh:82:10:application',
    fs: [],
    msg: null,
    who: 'Proposer2'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v371, time: v370, didSend: v77, from: v369 } = txn4;
  ;
  const v374 = stdlib.addressEq(v356, v369);
  stdlib.assert(v374, {
    at: './index.rsh:84:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Proposer2'
    });
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 4,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v393], secs: v395, time: v394, didSend: v100, from: v392 } = txn5;
  ;
  const v396 = stdlib.digest(ctc2, [v393]);
  const v398 = stdlib.digestEq(v396, v363);
  const v401 = stdlib.digestEq(v396, v366);
  const v402 = v398 ? true : v401;
  stdlib.assert(v402, {
    at: './index.rsh:97:8:application',
    fs: [],
    msg: null,
    who: 'Proposer2'
    });
  const v409 = stdlib.add(v394, v358);
  const txn6 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 5,
    out_tys: [],
    timeoutAt: ['time', v409],
    waitIfNotPresent: false
    }));
  if (txn6.didTimeout) {
    const txn7 = await (ctc.sendrecv({
      args: [v328, v335, v356, v357, v358, v363, v364, v366, v367, v392, v398, v401, v409],
      evt_cnt: 0,
      funcNum: 6,
      lct: v394,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn7) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v645, time: v644, didSend: v297, from: v643 } = txn7;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v356,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc4, ctc4, ctc1, ctc1, ctc5, ctc6, ctc5, ctc6, ctc4, ctc6, ctc6, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v645, time: v644, didSend: v297, from: v643 } = txn7;
    ;
    ;
    return;
    
    }
  else {
    const {data: [], secs: v413, time: v412, didSend: v114, from: v411 } = txn6;
    const v415 = stdlib.add(v357, v357);
    ;
    const v416 = stdlib.addressEq(v392, v411);
    stdlib.assert(v416, {
      at: './index.rsh:99:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Proposer2'
      });
    const txn7 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 7,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v419, time: v418, didSend: v119, from: v417 } = txn7;
    ;
    const v420 = stdlib.addressEq(v392, v417);
    stdlib.assert(v420, {
      at: './index.rsh:102:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Proposer2'
      });
    const v427 = stdlib.add(v418, v358);
    const txn8 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 8,
      out_tys: [],
      timeoutAt: ['time', v427],
      waitIfNotPresent: false
      }));
    if (txn8.didTimeout) {
      const txn9 = await (ctc.sendrecv({
        args: [v328, v335, v356, v357, v363, v364, v366, v367, v398, v401, v415, v427],
        evt_cnt: 0,
        funcNum: 9,
        lct: v418,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn9) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v628, time: v627, didSend: v263, from: v626 } = txn9;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v356,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc4, ctc4, ctc4, ctc1, ctc5, ctc6, ctc5, ctc6, ctc6, ctc6, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v628, time: v627, didSend: v263, from: v626 } = txn9;
      ;
      ;
      return;
      
      }
    else {
      const {data: [], secs: v448, time: v447, didSend: v143, from: v446 } = txn8;
      ;
      const txn9 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 10,
        out_tys: [ctc0],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v452], secs: v454, time: v453, didSend: v149, from: v451 } = txn9;
      ;
      const v455 = stdlib.addressEq(v446, v451);
      stdlib.assert(v455, {
        at: './index.rsh:118:7:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Proposer2'
        });
      const v456 = stdlib.digest(ctc2, [v452]);
      const v458 = stdlib.digestEq(v456, v363);
      const v461 = stdlib.digestEq(v456, v366);
      const v462 = v458 ? true : v461;
      stdlib.assert(v462, {
        at: './index.rsh:119:8:application',
        fs: [],
        msg: null,
        who: 'Proposer2'
        });
      const v469 = v364 ? v398 : false;
      if (v469) {
        const v470 = stdlib.mul(v357, stdlib.checkedBigNumberify('./index.rsh:123:56:decimal', stdlib.UInt_max, '3'));
        ;
        stdlib.protect(ctc3, await interact.seeOutcome(v359, v393, v452), {
          at: './index.rsh:47:24:application',
          fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:55:function exp)', 'at ./index.rsh:131:11:application call to "seeOutcome" (defined at: ./index.rsh:45:42:function exp)'],
          msg: 'seeOutcome',
          who: 'Proposer2'
          });
        
        return;
        }
      else {
        const v494 = v367 ? v401 : false;
        if (v494) {
          const v495 = stdlib.mul(v357, stdlib.checkedBigNumberify('./index.rsh:124:60:decimal', stdlib.UInt_max, '3'));
          ;
          stdlib.protect(ctc3, await interact.seeOutcome(v359, v393, v452), {
            at: './index.rsh:47:24:application',
            fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:55:function exp)', 'at ./index.rsh:131:11:application call to "seeOutcome" (defined at: ./index.rsh:45:42:function exp)'],
            msg: 'seeOutcome',
            who: 'Proposer2'
            });
          
          return;
          }
        else {
          const v519 = v364 ? v458 : false;
          if (v519) {
            const v520 = stdlib.mul(v357, stdlib.checkedBigNumberify('./index.rsh:125:60:decimal', stdlib.UInt_max, '3'));
            ;
            stdlib.protect(ctc3, await interact.seeOutcome(v359, v393, v452), {
              at: './index.rsh:47:24:application',
              fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:55:function exp)', 'at ./index.rsh:131:11:application call to "seeOutcome" (defined at: ./index.rsh:45:42:function exp)'],
              msg: 'seeOutcome',
              who: 'Proposer2'
              });
            
            return;
            }
          else {
            const v544 = v367 ? v461 : false;
            if (v544) {
              const v545 = stdlib.mul(v357, stdlib.checkedBigNumberify('./index.rsh:126:60:decimal', stdlib.UInt_max, '3'));
              ;
              stdlib.protect(ctc3, await interact.seeOutcome(v359, v393, v452), {
                at: './index.rsh:47:24:application',
                fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:55:function exp)', 'at ./index.rsh:131:11:application call to "seeOutcome" (defined at: ./index.rsh:45:42:function exp)'],
                msg: 'seeOutcome',
                who: 'Proposer2'
                });
              
              return;
              }
            else {
              const v569 = v401 ? v461 : false;
              if (v569) {
                const v570 = stdlib.mul(v357, stdlib.checkedBigNumberify('./index.rsh:127:60:decimal', stdlib.UInt_max, '3'));
                ;
                stdlib.protect(ctc3, await interact.seeOutcome(v359, v393, v452), {
                  at: './index.rsh:47:24:application',
                  fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:55:function exp)', 'at ./index.rsh:131:11:application call to "seeOutcome" (defined at: ./index.rsh:45:42:function exp)'],
                  msg: 'seeOutcome',
                  who: 'Proposer2'
                  });
                
                return;
                }
              else {
                const v594 = v398 ? v458 : false;
                if (v594) {
                  const v595 = stdlib.mul(v357, stdlib.checkedBigNumberify('./index.rsh:128:60:decimal', stdlib.UInt_max, '3'));
                  ;
                  stdlib.protect(ctc3, await interact.seeOutcome(v359, v393, v452), {
                    at: './index.rsh:47:24:application',
                    fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:55:function exp)', 'at ./index.rsh:131:11:application call to "seeOutcome" (defined at: ./index.rsh:45:42:function exp)'],
                    msg: 'seeOutcome',
                    who: 'Proposer2'
                    });
                  
                  return;
                  }
                else {
                  stdlib.protect(ctc3, await interact.seeOutcome(v359, v393, v452), {
                    at: './index.rsh:47:24:application',
                    fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:55:function exp)', 'at ./index.rsh:131:11:application call to "seeOutcome" (defined at: ./index.rsh:45:42:function exp)'],
                    msg: 'seeOutcome',
                    who: 'Proposer2'
                    });
                  
                  return;
                  }}}}}}
      
      }
    
    
    
    }
  
  
  
  
  
  
  
  
  
  
  
  };
export async function user1(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for user1 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for user1 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([ctc1]);
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Digest;
  const ctc6 = stdlib.T_Bool;
  
  
  const v323 = stdlib.protect(ctc0, interact.deadline, 'for user1\'s interact field deadline');
  const v324 = stdlib.protect(ctc0, interact.funds, 'for user1\'s interact field funds');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v329], secs: v331, time: v330, didSend: v29, from: v328 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v336], secs: v338, time: v337, didSend: v38, from: v335 } = txn2;
  ;
  stdlib.protect(ctc2, await interact.viewIdeas(v329, v336), {
    at: './index.rsh:76:46:application',
    fs: ['at ./index.rsh:73:11:application call to [unknown function] (defined at: ./index.rsh:73:14:function exp)'],
    msg: 'viewIdeas',
    who: 'user1'
    });
  const v341 = stdlib.protect(ctc1, await interact.voteIdea(), {
    at: './index.rsh:77:45:application',
    fs: ['at ./index.rsh:73:11:application call to [unknown function] (defined at: ./index.rsh:73:14:function exp)'],
    msg: 'voteIdea',
    who: 'user1'
    });
  const v342 = stdlib.digest(ctc3, [v341]);
  const v343 = stdlib.digest(ctc3, [v329]);
  const v344 = stdlib.digestEq(v342, v343);
  const v346 = stdlib.digest(ctc3, [v336]);
  const v347 = stdlib.digestEq(v342, v346);
  const v348 = v344 ? true : v347;
  stdlib.assert(v348, {
    at: './index.rsh:78:9:application',
    fs: ['at ./index.rsh:73:11:application call to [unknown function] (defined at: ./index.rsh:73:14:function exp)'],
    msg: null,
    who: 'user1'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v328, v329, v335, v336, v324, v323, v341],
    evt_cnt: 3,
    funcNum: 2,
    lct: v337,
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:81:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v357, v358, v359], secs: v361, time: v360, didSend: v63, from: v356 } = txn3;
      
      ;
      const v362 = stdlib.digest(ctc3, [v359]);
      const v363 = stdlib.digest(ctc3, [v329]);
      const v364 = stdlib.digestEq(v362, v363);
      const v366 = stdlib.digest(ctc3, [v336]);
      const v367 = stdlib.digestEq(v362, v366);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc4, ctc1, ctc0, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v357, v358, v359], secs: v361, time: v360, didSend: v63, from: v356 } = txn3;
  ;
  const v362 = stdlib.digest(ctc3, [v359]);
  const v363 = stdlib.digest(ctc3, [v329]);
  const v364 = stdlib.digestEq(v362, v363);
  const v366 = stdlib.digest(ctc3, [v336]);
  const v367 = stdlib.digestEq(v362, v366);
  const v368 = v364 ? true : v367;
  stdlib.assert(v368, {
    at: './index.rsh:82:10:application',
    fs: [],
    msg: null,
    who: 'user1'
    });
  const txn4 = await (ctc.sendrecv({
    args: [v328, v335, v356, v357, v358, v363, v364, v366, v367],
    evt_cnt: 0,
    funcNum: 3,
    lct: v360,
    onlyIf: true,
    out_tys: [],
    pay: [v357, []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v371, time: v370, didSend: v77, from: v369 } = txn4;
      
      sim_r.txns.push({
        amt: v357,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc4, ctc4, ctc0, ctc0, ctc5, ctc6, ctc5, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v371, time: v370, didSend: v77, from: v369 } = txn4;
  ;
  const v374 = stdlib.addressEq(v356, v369);
  stdlib.assert(v374, {
    at: './index.rsh:84:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'user1'
    });
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 4,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v393], secs: v395, time: v394, didSend: v100, from: v392 } = txn5;
  ;
  const v396 = stdlib.digest(ctc3, [v393]);
  const v398 = stdlib.digestEq(v396, v363);
  const v401 = stdlib.digestEq(v396, v366);
  const v402 = v398 ? true : v401;
  stdlib.assert(v402, {
    at: './index.rsh:97:8:application',
    fs: [],
    msg: null,
    who: 'user1'
    });
  const v409 = stdlib.add(v394, v358);
  const txn6 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 5,
    out_tys: [],
    timeoutAt: ['time', v409],
    waitIfNotPresent: false
    }));
  if (txn6.didTimeout) {
    const txn7 = await (ctc.sendrecv({
      args: [v328, v335, v356, v357, v358, v363, v364, v366, v367, v392, v398, v401, v409],
      evt_cnt: 0,
      funcNum: 6,
      lct: v394,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn7) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v645, time: v644, didSend: v297, from: v643 } = txn7;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v356,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc4, ctc4, ctc0, ctc0, ctc5, ctc6, ctc5, ctc6, ctc4, ctc6, ctc6, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v645, time: v644, didSend: v297, from: v643 } = txn7;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:42:27:application',
      fs: ['at ./index.rsh:41:7:application call to [unknown function] (defined at: ./index.rsh:41:33:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:40:26:function exp)', 'at ./index.rsh:100:49:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'user1'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v413, time: v412, didSend: v114, from: v411 } = txn6;
    const v415 = stdlib.add(v357, v357);
    ;
    const v416 = stdlib.addressEq(v392, v411);
    stdlib.assert(v416, {
      at: './index.rsh:99:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'user1'
      });
    const txn7 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 7,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v419, time: v418, didSend: v119, from: v417 } = txn7;
    ;
    const v420 = stdlib.addressEq(v392, v417);
    stdlib.assert(v420, {
      at: './index.rsh:102:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'user1'
      });
    const v427 = stdlib.add(v418, v358);
    const txn8 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 8,
      out_tys: [],
      timeoutAt: ['time', v427],
      waitIfNotPresent: false
      }));
    if (txn8.didTimeout) {
      const txn9 = await (ctc.sendrecv({
        args: [v328, v335, v356, v357, v363, v364, v366, v367, v398, v401, v415, v427],
        evt_cnt: 0,
        funcNum: 9,
        lct: v418,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn9) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v628, time: v627, didSend: v263, from: v626 } = txn9;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v356,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc4, ctc4, ctc4, ctc0, ctc5, ctc6, ctc5, ctc6, ctc6, ctc6, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v628, time: v627, didSend: v263, from: v626 } = txn9;
      ;
      ;
      stdlib.protect(ctc2, await interact.informTimeout(), {
        at: './index.rsh:42:27:application',
        fs: ['at ./index.rsh:41:7:application call to [unknown function] (defined at: ./index.rsh:41:33:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:40:26:function exp)', 'at ./index.rsh:116:49:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'informTimeout',
        who: 'user1'
        });
      
      return;
      
      }
    else {
      const {data: [], secs: v448, time: v447, didSend: v143, from: v446 } = txn8;
      ;
      const txn9 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 10,
        out_tys: [ctc1],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v452], secs: v454, time: v453, didSend: v149, from: v451 } = txn9;
      ;
      const v455 = stdlib.addressEq(v446, v451);
      stdlib.assert(v455, {
        at: './index.rsh:118:7:dot',
        fs: [],
        msg: 'sender correct',
        who: 'user1'
        });
      const v456 = stdlib.digest(ctc3, [v452]);
      const v458 = stdlib.digestEq(v456, v363);
      const v461 = stdlib.digestEq(v456, v366);
      const v462 = v458 ? true : v461;
      stdlib.assert(v462, {
        at: './index.rsh:119:8:application',
        fs: [],
        msg: null,
        who: 'user1'
        });
      const v469 = v364 ? v398 : false;
      if (v469) {
        const v470 = stdlib.mul(v357, stdlib.checkedBigNumberify('./index.rsh:123:56:decimal', stdlib.UInt_max, '3'));
        ;
        stdlib.protect(ctc2, await interact.seeOutcome(v359, v393, v452), {
          at: './index.rsh:47:24:application',
          fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:55:function exp)', 'at ./index.rsh:131:11:application call to "seeOutcome" (defined at: ./index.rsh:45:42:function exp)'],
          msg: 'seeOutcome',
          who: 'user1'
          });
        
        return;
        }
      else {
        const v494 = v367 ? v401 : false;
        if (v494) {
          const v495 = stdlib.mul(v357, stdlib.checkedBigNumberify('./index.rsh:124:60:decimal', stdlib.UInt_max, '3'));
          ;
          stdlib.protect(ctc2, await interact.seeOutcome(v359, v393, v452), {
            at: './index.rsh:47:24:application',
            fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:55:function exp)', 'at ./index.rsh:131:11:application call to "seeOutcome" (defined at: ./index.rsh:45:42:function exp)'],
            msg: 'seeOutcome',
            who: 'user1'
            });
          
          return;
          }
        else {
          const v519 = v364 ? v458 : false;
          if (v519) {
            const v520 = stdlib.mul(v357, stdlib.checkedBigNumberify('./index.rsh:125:60:decimal', stdlib.UInt_max, '3'));
            ;
            stdlib.protect(ctc2, await interact.seeOutcome(v359, v393, v452), {
              at: './index.rsh:47:24:application',
              fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:55:function exp)', 'at ./index.rsh:131:11:application call to "seeOutcome" (defined at: ./index.rsh:45:42:function exp)'],
              msg: 'seeOutcome',
              who: 'user1'
              });
            
            return;
            }
          else {
            const v544 = v367 ? v461 : false;
            if (v544) {
              const v545 = stdlib.mul(v357, stdlib.checkedBigNumberify('./index.rsh:126:60:decimal', stdlib.UInt_max, '3'));
              ;
              stdlib.protect(ctc2, await interact.seeOutcome(v359, v393, v452), {
                at: './index.rsh:47:24:application',
                fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:55:function exp)', 'at ./index.rsh:131:11:application call to "seeOutcome" (defined at: ./index.rsh:45:42:function exp)'],
                msg: 'seeOutcome',
                who: 'user1'
                });
              
              return;
              }
            else {
              const v569 = v401 ? v461 : false;
              if (v569) {
                const v570 = stdlib.mul(v357, stdlib.checkedBigNumberify('./index.rsh:127:60:decimal', stdlib.UInt_max, '3'));
                ;
                stdlib.protect(ctc2, await interact.seeOutcome(v359, v393, v452), {
                  at: './index.rsh:47:24:application',
                  fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:55:function exp)', 'at ./index.rsh:131:11:application call to "seeOutcome" (defined at: ./index.rsh:45:42:function exp)'],
                  msg: 'seeOutcome',
                  who: 'user1'
                  });
                
                return;
                }
              else {
                const v594 = v398 ? v458 : false;
                if (v594) {
                  const v595 = stdlib.mul(v357, stdlib.checkedBigNumberify('./index.rsh:128:60:decimal', stdlib.UInt_max, '3'));
                  ;
                  stdlib.protect(ctc2, await interact.seeOutcome(v359, v393, v452), {
                    at: './index.rsh:47:24:application',
                    fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:55:function exp)', 'at ./index.rsh:131:11:application call to "seeOutcome" (defined at: ./index.rsh:45:42:function exp)'],
                    msg: 'seeOutcome',
                    who: 'user1'
                    });
                  
                  return;
                  }
                else {
                  stdlib.protect(ctc2, await interact.seeOutcome(v359, v393, v452), {
                    at: './index.rsh:47:24:application',
                    fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:55:function exp)', 'at ./index.rsh:131:11:application call to "seeOutcome" (defined at: ./index.rsh:45:42:function exp)'],
                    msg: 'seeOutcome',
                    who: 'user1'
                    });
                  
                  return;
                  }}}}}}
      
      }
    
    
    
    }
  
  
  
  
  
  
  
  
  
  
  
  };
export async function user2(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for user2 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for user2 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc0]);
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Digest;
  const ctc6 = stdlib.T_Bool;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v329], secs: v331, time: v330, didSend: v29, from: v328 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v336], secs: v338, time: v337, didSend: v38, from: v335 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 2,
    out_tys: [ctc1, ctc1, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v357, v358, v359], secs: v361, time: v360, didSend: v63, from: v356 } = txn3;
  ;
  const v362 = stdlib.digest(ctc2, [v359]);
  const v363 = stdlib.digest(ctc2, [v329]);
  const v364 = stdlib.digestEq(v362, v363);
  const v366 = stdlib.digest(ctc2, [v336]);
  const v367 = stdlib.digestEq(v362, v366);
  const v368 = v364 ? true : v367;
  stdlib.assert(v368, {
    at: './index.rsh:82:10:application',
    fs: [],
    msg: null,
    who: 'user2'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v371, time: v370, didSend: v77, from: v369 } = txn4;
  ;
  const v374 = stdlib.addressEq(v356, v369);
  stdlib.assert(v374, {
    at: './index.rsh:84:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'user2'
    });
  stdlib.protect(ctc3, await interact.accepFunds(v357), {
    at: './index.rsh:90:22:application',
    fs: ['at ./index.rsh:89:11:application call to [unknown function] (defined at: ./index.rsh:89:14:function exp)'],
    msg: 'accepFunds',
    who: 'user2'
    });
  stdlib.protect(ctc3, await interact.viewIdeas(v329, v336), {
    at: './index.rsh:91:46:application',
    fs: ['at ./index.rsh:89:11:application call to [unknown function] (defined at: ./index.rsh:89:14:function exp)'],
    msg: 'viewIdeas',
    who: 'user2'
    });
  const v377 = stdlib.protect(ctc0, await interact.voteIdea(), {
    at: './index.rsh:92:45:application',
    fs: ['at ./index.rsh:89:11:application call to [unknown function] (defined at: ./index.rsh:89:14:function exp)'],
    msg: 'voteIdea',
    who: 'user2'
    });
  const v378 = stdlib.digest(ctc2, [v377]);
  const v380 = stdlib.digestEq(v378, v363);
  const v383 = stdlib.digestEq(v378, v366);
  const v384 = v380 ? true : v383;
  stdlib.assert(v384, {
    at: './index.rsh:93:9:application',
    fs: ['at ./index.rsh:89:11:application call to [unknown function] (defined at: ./index.rsh:89:14:function exp)'],
    msg: null,
    who: 'user2'
    });
  
  const txn5 = await (ctc.sendrecv({
    args: [v328, v335, v356, v357, v358, v363, v364, v366, v367, v377],
    evt_cnt: 1,
    funcNum: 4,
    lct: v370,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:96:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v393], secs: v395, time: v394, didSend: v100, from: v392 } = txn5;
      
      ;
      const v396 = stdlib.digest(ctc2, [v393]);
      const v398 = stdlib.digestEq(v396, v363);
      const v401 = stdlib.digestEq(v396, v366);
      const v409 = stdlib.add(v394, v358);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc4, ctc4, ctc1, ctc1, ctc5, ctc6, ctc5, ctc6, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v393], secs: v395, time: v394, didSend: v100, from: v392 } = txn5;
  ;
  const v396 = stdlib.digest(ctc2, [v393]);
  const v398 = stdlib.digestEq(v396, v363);
  const v401 = stdlib.digestEq(v396, v366);
  const v402 = v398 ? true : v401;
  stdlib.assert(v402, {
    at: './index.rsh:97:8:application',
    fs: [],
    msg: null,
    who: 'user2'
    });
  const v409 = stdlib.add(v394, v358);
  const txn6 = await (ctc.sendrecv({
    args: [v328, v335, v356, v357, v358, v363, v364, v366, v367, v392, v398, v401, v409],
    evt_cnt: 0,
    funcNum: 5,
    lct: v394,
    onlyIf: true,
    out_tys: [],
    pay: [v357, []],
    sim_p: (async (txn6) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v413, time: v412, didSend: v114, from: v411 } = txn6;
      
      const v415 = stdlib.add(v357, v357);
      sim_r.txns.push({
        amt: v357,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v409],
    tys: [ctc4, ctc4, ctc4, ctc1, ctc1, ctc5, ctc6, ctc5, ctc6, ctc4, ctc6, ctc6, ctc1],
    waitIfNotPresent: false
    }));
  if (txn6.didTimeout) {
    const txn7 = await (ctc.sendrecv({
      args: [v328, v335, v356, v357, v358, v363, v364, v366, v367, v392, v398, v401, v409],
      evt_cnt: 0,
      funcNum: 6,
      lct: v394,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn7) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v645, time: v644, didSend: v297, from: v643 } = txn7;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v356,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc4, ctc4, ctc1, ctc1, ctc5, ctc6, ctc5, ctc6, ctc4, ctc6, ctc6, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v645, time: v644, didSend: v297, from: v643 } = txn7;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:42:27:application',
      fs: ['at ./index.rsh:41:7:application call to [unknown function] (defined at: ./index.rsh:41:33:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:40:26:function exp)', 'at ./index.rsh:100:49:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'user2'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v413, time: v412, didSend: v114, from: v411 } = txn6;
    const v415 = stdlib.add(v357, v357);
    ;
    const v416 = stdlib.addressEq(v392, v411);
    stdlib.assert(v416, {
      at: './index.rsh:99:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'user2'
      });
    const txn7 = await (ctc.sendrecv({
      args: [v328, v335, v356, v357, v358, v363, v364, v366, v367, v392, v398, v401, v415],
      evt_cnt: 0,
      funcNum: 7,
      lct: v412,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:102:7:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn7) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v419, time: v418, didSend: v119, from: v417 } = txn7;
        
        ;
        const v427 = stdlib.add(v418, v358);
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc4, ctc4, ctc1, ctc1, ctc5, ctc6, ctc5, ctc6, ctc4, ctc6, ctc6, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v419, time: v418, didSend: v119, from: v417 } = txn7;
    ;
    const v420 = stdlib.addressEq(v392, v417);
    stdlib.assert(v420, {
      at: './index.rsh:102:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'user2'
      });
    const v427 = stdlib.add(v418, v358);
    const txn8 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 8,
      out_tys: [],
      timeoutAt: ['time', v427],
      waitIfNotPresent: false
      }));
    if (txn8.didTimeout) {
      const txn9 = await (ctc.sendrecv({
        args: [v328, v335, v356, v357, v363, v364, v366, v367, v398, v401, v415, v427],
        evt_cnt: 0,
        funcNum: 9,
        lct: v418,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn9) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v628, time: v627, didSend: v263, from: v626 } = txn9;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v356,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc4, ctc4, ctc4, ctc1, ctc5, ctc6, ctc5, ctc6, ctc6, ctc6, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v628, time: v627, didSend: v263, from: v626 } = txn9;
      ;
      ;
      stdlib.protect(ctc3, await interact.informTimeout(), {
        at: './index.rsh:42:27:application',
        fs: ['at ./index.rsh:41:7:application call to [unknown function] (defined at: ./index.rsh:41:33:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:40:26:function exp)', 'at ./index.rsh:116:49:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'informTimeout',
        who: 'user2'
        });
      
      return;
      
      }
    else {
      const {data: [], secs: v448, time: v447, didSend: v143, from: v446 } = txn8;
      ;
      const txn9 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 10,
        out_tys: [ctc0],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v452], secs: v454, time: v453, didSend: v149, from: v451 } = txn9;
      ;
      const v455 = stdlib.addressEq(v446, v451);
      stdlib.assert(v455, {
        at: './index.rsh:118:7:dot',
        fs: [],
        msg: 'sender correct',
        who: 'user2'
        });
      const v456 = stdlib.digest(ctc2, [v452]);
      const v458 = stdlib.digestEq(v456, v363);
      const v461 = stdlib.digestEq(v456, v366);
      const v462 = v458 ? true : v461;
      stdlib.assert(v462, {
        at: './index.rsh:119:8:application',
        fs: [],
        msg: null,
        who: 'user2'
        });
      const v469 = v364 ? v398 : false;
      if (v469) {
        const v470 = stdlib.mul(v357, stdlib.checkedBigNumberify('./index.rsh:123:56:decimal', stdlib.UInt_max, '3'));
        ;
        stdlib.protect(ctc3, await interact.seeOutcome(v359, v393, v452), {
          at: './index.rsh:47:24:application',
          fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:55:function exp)', 'at ./index.rsh:131:11:application call to "seeOutcome" (defined at: ./index.rsh:45:42:function exp)'],
          msg: 'seeOutcome',
          who: 'user2'
          });
        
        return;
        }
      else {
        const v494 = v367 ? v401 : false;
        if (v494) {
          const v495 = stdlib.mul(v357, stdlib.checkedBigNumberify('./index.rsh:124:60:decimal', stdlib.UInt_max, '3'));
          ;
          stdlib.protect(ctc3, await interact.seeOutcome(v359, v393, v452), {
            at: './index.rsh:47:24:application',
            fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:55:function exp)', 'at ./index.rsh:131:11:application call to "seeOutcome" (defined at: ./index.rsh:45:42:function exp)'],
            msg: 'seeOutcome',
            who: 'user2'
            });
          
          return;
          }
        else {
          const v519 = v364 ? v458 : false;
          if (v519) {
            const v520 = stdlib.mul(v357, stdlib.checkedBigNumberify('./index.rsh:125:60:decimal', stdlib.UInt_max, '3'));
            ;
            stdlib.protect(ctc3, await interact.seeOutcome(v359, v393, v452), {
              at: './index.rsh:47:24:application',
              fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:55:function exp)', 'at ./index.rsh:131:11:application call to "seeOutcome" (defined at: ./index.rsh:45:42:function exp)'],
              msg: 'seeOutcome',
              who: 'user2'
              });
            
            return;
            }
          else {
            const v544 = v367 ? v461 : false;
            if (v544) {
              const v545 = stdlib.mul(v357, stdlib.checkedBigNumberify('./index.rsh:126:60:decimal', stdlib.UInt_max, '3'));
              ;
              stdlib.protect(ctc3, await interact.seeOutcome(v359, v393, v452), {
                at: './index.rsh:47:24:application',
                fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:55:function exp)', 'at ./index.rsh:131:11:application call to "seeOutcome" (defined at: ./index.rsh:45:42:function exp)'],
                msg: 'seeOutcome',
                who: 'user2'
                });
              
              return;
              }
            else {
              const v569 = v401 ? v461 : false;
              if (v569) {
                const v570 = stdlib.mul(v357, stdlib.checkedBigNumberify('./index.rsh:127:60:decimal', stdlib.UInt_max, '3'));
                ;
                stdlib.protect(ctc3, await interact.seeOutcome(v359, v393, v452), {
                  at: './index.rsh:47:24:application',
                  fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:55:function exp)', 'at ./index.rsh:131:11:application call to "seeOutcome" (defined at: ./index.rsh:45:42:function exp)'],
                  msg: 'seeOutcome',
                  who: 'user2'
                  });
                
                return;
                }
              else {
                const v594 = v398 ? v458 : false;
                if (v594) {
                  const v595 = stdlib.mul(v357, stdlib.checkedBigNumberify('./index.rsh:128:60:decimal', stdlib.UInt_max, '3'));
                  ;
                  stdlib.protect(ctc3, await interact.seeOutcome(v359, v393, v452), {
                    at: './index.rsh:47:24:application',
                    fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:55:function exp)', 'at ./index.rsh:131:11:application call to "seeOutcome" (defined at: ./index.rsh:45:42:function exp)'],
                    msg: 'seeOutcome',
                    who: 'user2'
                    });
                  
                  return;
                  }
                else {
                  stdlib.protect(ctc3, await interact.seeOutcome(v359, v393, v452), {
                    at: './index.rsh:47:24:application',
                    fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:55:function exp)', 'at ./index.rsh:131:11:application call to "seeOutcome" (defined at: ./index.rsh:45:42:function exp)'],
                    msg: 'seeOutcome',
                    who: 'user2'
                    });
                  
                  return;
                  }}}}}}
      
      }
    
    
    
    }
  
  
  
  
  
  
  
  
  
  
  
  };
export async function user3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for user3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for user3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc0]);
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Digest;
  const ctc6 = stdlib.T_Bool;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v329], secs: v331, time: v330, didSend: v29, from: v328 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v336], secs: v338, time: v337, didSend: v38, from: v335 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 2,
    out_tys: [ctc1, ctc1, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v357, v358, v359], secs: v361, time: v360, didSend: v63, from: v356 } = txn3;
  ;
  const v362 = stdlib.digest(ctc2, [v359]);
  const v363 = stdlib.digest(ctc2, [v329]);
  const v364 = stdlib.digestEq(v362, v363);
  const v366 = stdlib.digest(ctc2, [v336]);
  const v367 = stdlib.digestEq(v362, v366);
  const v368 = v364 ? true : v367;
  stdlib.assert(v368, {
    at: './index.rsh:82:10:application',
    fs: [],
    msg: null,
    who: 'user3'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v371, time: v370, didSend: v77, from: v369 } = txn4;
  ;
  const v374 = stdlib.addressEq(v356, v369);
  stdlib.assert(v374, {
    at: './index.rsh:84:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'user3'
    });
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 4,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v393], secs: v395, time: v394, didSend: v100, from: v392 } = txn5;
  ;
  const v396 = stdlib.digest(ctc2, [v393]);
  const v398 = stdlib.digestEq(v396, v363);
  const v401 = stdlib.digestEq(v396, v366);
  const v402 = v398 ? true : v401;
  stdlib.assert(v402, {
    at: './index.rsh:97:8:application',
    fs: [],
    msg: null,
    who: 'user3'
    });
  const v409 = stdlib.add(v394, v358);
  const txn6 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 5,
    out_tys: [],
    timeoutAt: ['time', v409],
    waitIfNotPresent: false
    }));
  if (txn6.didTimeout) {
    const txn7 = await (ctc.sendrecv({
      args: [v328, v335, v356, v357, v358, v363, v364, v366, v367, v392, v398, v401, v409],
      evt_cnt: 0,
      funcNum: 6,
      lct: v394,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn7) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v645, time: v644, didSend: v297, from: v643 } = txn7;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v356,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc4, ctc4, ctc1, ctc1, ctc5, ctc6, ctc5, ctc6, ctc4, ctc6, ctc6, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v645, time: v644, didSend: v297, from: v643 } = txn7;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:42:27:application',
      fs: ['at ./index.rsh:41:7:application call to [unknown function] (defined at: ./index.rsh:41:33:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:40:26:function exp)', 'at ./index.rsh:100:49:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'user3'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v413, time: v412, didSend: v114, from: v411 } = txn6;
    const v415 = stdlib.add(v357, v357);
    ;
    const v416 = stdlib.addressEq(v392, v411);
    stdlib.assert(v416, {
      at: './index.rsh:99:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'user3'
      });
    const txn7 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 7,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v419, time: v418, didSend: v119, from: v417 } = txn7;
    ;
    const v420 = stdlib.addressEq(v392, v417);
    stdlib.assert(v420, {
      at: './index.rsh:102:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'user3'
      });
    const v427 = stdlib.add(v418, v358);
    stdlib.protect(ctc3, await interact.accepFunds(v357), {
      at: './index.rsh:108:22:application',
      fs: ['at ./index.rsh:107:11:application call to [unknown function] (defined at: ./index.rsh:107:14:function exp)'],
      msg: 'accepFunds',
      who: 'user3'
      });
    stdlib.protect(ctc3, await interact.viewIdeas(v329, v336), {
      at: './index.rsh:109:46:application',
      fs: ['at ./index.rsh:107:11:application call to [unknown function] (defined at: ./index.rsh:107:14:function exp)'],
      msg: 'viewIdeas',
      who: 'user3'
      });
    const v431 = stdlib.protect(ctc0, await interact.voteIdea(), {
      at: './index.rsh:110:45:application',
      fs: ['at ./index.rsh:107:11:application call to [unknown function] (defined at: ./index.rsh:107:14:function exp)'],
      msg: 'voteIdea',
      who: 'user3'
      });
    const v432 = stdlib.digest(ctc2, [v431]);
    const v434 = stdlib.digestEq(v432, v363);
    const v437 = stdlib.digestEq(v432, v366);
    const v438 = v434 ? true : v437;
    stdlib.assert(v438, {
      at: './index.rsh:111:9:application',
      fs: ['at ./index.rsh:107:11:application call to [unknown function] (defined at: ./index.rsh:107:14:function exp)'],
      msg: null,
      who: 'user3'
      });
    
    const txn8 = await (ctc.sendrecv({
      args: [v328, v335, v356, v357, v363, v364, v366, v367, v398, v401, v415, v427],
      evt_cnt: 0,
      funcNum: 8,
      lct: v418,
      onlyIf: true,
      out_tys: [],
      pay: [v357, []],
      sim_p: (async (txn8) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v448, time: v447, didSend: v143, from: v446 } = txn8;
        
        sim_r.txns.push({
          amt: v357,
          kind: 'to',
          tok: undefined /* Nothing */
          });
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v427],
      tys: [ctc4, ctc4, ctc4, ctc1, ctc5, ctc6, ctc5, ctc6, ctc6, ctc6, ctc1, ctc1],
      waitIfNotPresent: false
      }));
    if (txn8.didTimeout) {
      const txn9 = await (ctc.sendrecv({
        args: [v328, v335, v356, v357, v363, v364, v366, v367, v398, v401, v415, v427],
        evt_cnt: 0,
        funcNum: 9,
        lct: v418,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn9) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v628, time: v627, didSend: v263, from: v626 } = txn9;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v356,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc4, ctc4, ctc4, ctc1, ctc5, ctc6, ctc5, ctc6, ctc6, ctc6, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v628, time: v627, didSend: v263, from: v626 } = txn9;
      ;
      ;
      stdlib.protect(ctc3, await interact.informTimeout(), {
        at: './index.rsh:42:27:application',
        fs: ['at ./index.rsh:41:7:application call to [unknown function] (defined at: ./index.rsh:41:33:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:40:26:function exp)', 'at ./index.rsh:116:49:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'informTimeout',
        who: 'user3'
        });
      
      return;
      
      }
    else {
      const {data: [], secs: v448, time: v447, didSend: v143, from: v446 } = txn8;
      ;
      const txn9 = await (ctc.sendrecv({
        args: [v328, v335, v357, v363, v364, v366, v367, v398, v401, v446, v431],
        evt_cnt: 1,
        funcNum: 10,
        lct: v447,
        onlyIf: true,
        out_tys: [ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:118:7:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn9) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v452], secs: v454, time: v453, didSend: v149, from: v451 } = txn9;
          
          ;
          const v456 = stdlib.digest(ctc2, [v452]);
          const v458 = stdlib.digestEq(v456, v363);
          const v461 = stdlib.digestEq(v456, v366);
          const v469 = v364 ? v398 : false;
          if (v469) {
            const v470 = stdlib.mul(v357, stdlib.checkedBigNumberify('./index.rsh:123:56:decimal', stdlib.UInt_max, '3'));
            sim_r.txns.push({
              kind: 'from',
              to: v328,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v494 = v367 ? v401 : false;
            if (v494) {
              const v495 = stdlib.mul(v357, stdlib.checkedBigNumberify('./index.rsh:124:60:decimal', stdlib.UInt_max, '3'));
              sim_r.txns.push({
                kind: 'from',
                to: v335,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              const v519 = v364 ? v458 : false;
              if (v519) {
                const v520 = stdlib.mul(v357, stdlib.checkedBigNumberify('./index.rsh:125:60:decimal', stdlib.UInt_max, '3'));
                sim_r.txns.push({
                  kind: 'from',
                  to: v328,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                const v544 = v367 ? v461 : false;
                if (v544) {
                  const v545 = stdlib.mul(v357, stdlib.checkedBigNumberify('./index.rsh:126:60:decimal', stdlib.UInt_max, '3'));
                  sim_r.txns.push({
                    kind: 'from',
                    to: v335,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  const v569 = v401 ? v461 : false;
                  if (v569) {
                    const v570 = stdlib.mul(v357, stdlib.checkedBigNumberify('./index.rsh:127:60:decimal', stdlib.UInt_max, '3'));
                    sim_r.txns.push({
                      kind: 'from',
                      to: v335,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }
                  else {
                    const v594 = v398 ? v458 : false;
                    if (v594) {
                      const v595 = stdlib.mul(v357, stdlib.checkedBigNumberify('./index.rsh:128:60:decimal', stdlib.UInt_max, '3'));
                      sim_r.txns.push({
                        kind: 'from',
                        to: v328,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }
                    else {
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }}}}}}
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc4, ctc4, ctc1, ctc5, ctc6, ctc5, ctc6, ctc6, ctc6, ctc4, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [v452], secs: v454, time: v453, didSend: v149, from: v451 } = txn9;
      ;
      const v455 = stdlib.addressEq(v446, v451);
      stdlib.assert(v455, {
        at: './index.rsh:118:7:dot',
        fs: [],
        msg: 'sender correct',
        who: 'user3'
        });
      const v456 = stdlib.digest(ctc2, [v452]);
      const v458 = stdlib.digestEq(v456, v363);
      const v461 = stdlib.digestEq(v456, v366);
      const v462 = v458 ? true : v461;
      stdlib.assert(v462, {
        at: './index.rsh:119:8:application',
        fs: [],
        msg: null,
        who: 'user3'
        });
      const v469 = v364 ? v398 : false;
      if (v469) {
        const v470 = stdlib.mul(v357, stdlib.checkedBigNumberify('./index.rsh:123:56:decimal', stdlib.UInt_max, '3'));
        ;
        stdlib.protect(ctc3, await interact.seeOutcome(v359, v393, v452), {
          at: './index.rsh:47:24:application',
          fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:55:function exp)', 'at ./index.rsh:131:11:application call to "seeOutcome" (defined at: ./index.rsh:45:42:function exp)'],
          msg: 'seeOutcome',
          who: 'user3'
          });
        
        return;
        }
      else {
        const v494 = v367 ? v401 : false;
        if (v494) {
          const v495 = stdlib.mul(v357, stdlib.checkedBigNumberify('./index.rsh:124:60:decimal', stdlib.UInt_max, '3'));
          ;
          stdlib.protect(ctc3, await interact.seeOutcome(v359, v393, v452), {
            at: './index.rsh:47:24:application',
            fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:55:function exp)', 'at ./index.rsh:131:11:application call to "seeOutcome" (defined at: ./index.rsh:45:42:function exp)'],
            msg: 'seeOutcome',
            who: 'user3'
            });
          
          return;
          }
        else {
          const v519 = v364 ? v458 : false;
          if (v519) {
            const v520 = stdlib.mul(v357, stdlib.checkedBigNumberify('./index.rsh:125:60:decimal', stdlib.UInt_max, '3'));
            ;
            stdlib.protect(ctc3, await interact.seeOutcome(v359, v393, v452), {
              at: './index.rsh:47:24:application',
              fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:55:function exp)', 'at ./index.rsh:131:11:application call to "seeOutcome" (defined at: ./index.rsh:45:42:function exp)'],
              msg: 'seeOutcome',
              who: 'user3'
              });
            
            return;
            }
          else {
            const v544 = v367 ? v461 : false;
            if (v544) {
              const v545 = stdlib.mul(v357, stdlib.checkedBigNumberify('./index.rsh:126:60:decimal', stdlib.UInt_max, '3'));
              ;
              stdlib.protect(ctc3, await interact.seeOutcome(v359, v393, v452), {
                at: './index.rsh:47:24:application',
                fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:55:function exp)', 'at ./index.rsh:131:11:application call to "seeOutcome" (defined at: ./index.rsh:45:42:function exp)'],
                msg: 'seeOutcome',
                who: 'user3'
                });
              
              return;
              }
            else {
              const v569 = v401 ? v461 : false;
              if (v569) {
                const v570 = stdlib.mul(v357, stdlib.checkedBigNumberify('./index.rsh:127:60:decimal', stdlib.UInt_max, '3'));
                ;
                stdlib.protect(ctc3, await interact.seeOutcome(v359, v393, v452), {
                  at: './index.rsh:47:24:application',
                  fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:55:function exp)', 'at ./index.rsh:131:11:application call to "seeOutcome" (defined at: ./index.rsh:45:42:function exp)'],
                  msg: 'seeOutcome',
                  who: 'user3'
                  });
                
                return;
                }
              else {
                const v594 = v398 ? v458 : false;
                if (v594) {
                  const v595 = stdlib.mul(v357, stdlib.checkedBigNumberify('./index.rsh:128:60:decimal', stdlib.UInt_max, '3'));
                  ;
                  stdlib.protect(ctc3, await interact.seeOutcome(v359, v393, v452), {
                    at: './index.rsh:47:24:application',
                    fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:55:function exp)', 'at ./index.rsh:131:11:application call to "seeOutcome" (defined at: ./index.rsh:45:42:function exp)'],
                    msg: 'seeOutcome',
                    who: 'user3'
                    });
                  
                  return;
                  }
                else {
                  stdlib.protect(ctc3, await interact.seeOutcome(v359, v393, v452), {
                    at: './index.rsh:47:24:application',
                    fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:55:function exp)', 'at ./index.rsh:131:11:application call to "seeOutcome" (defined at: ./index.rsh:45:42:function exp)'],
                    msg: 'seeOutcome',
                    who: 'user3'
                    });
                  
                  return;
                  }}}}}}
      
      }
    
    
    
    }
  
  
  
  
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiANAAEDCGAFCmgH1AECBLQBJgMBAAEBACI1ADEYQQdVKmRJIls1ASVbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSEFDEAEGUklDEACK0mBCQxAAXhJIQYMQAEvIQYSRCEGNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpJVwAgNf9XICA1/oFAWzX9V2gBFzX8V4kBFzX7V4oBFzX6V4sBFzX5STUFNfiABIg3eKk0+FCwNANXjCAxABJENPgBSTX3NANXSCASNfY09zQDV2kgEjX1NPY09RFENPw0+hBBABWxIrIBNP0kC7III7IQNP+yB7NCBig0+zT5EEEAFbEisgE0/SQLsggjshA0/rIHs0IGCzT8NPYQQQAVsSKyATT9JAuyCCOyEDT/sgezQgXuNPs09RBBABWxIrIBNP0kC7III7IQNP6yB7NCBdE0+TT1EEEAFbEisgE0/SQLsggjshA0/rIHs0IFtDT6NPYQQQAVsSKyATT9JAuyCCOyEDT/sgezQgWXQgWUSCU0ARJENARJIhJMNAISEUQoZClkUDUDgASiBWaOsDIGNAMhDFsPRLEisgE0A4GsAVuyCCOyEDQDV0AgsgezQgVSSCU0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpJVwAgNf9XICA1/iEEWzX9V2ggNfxXiAEXNftXiSA1+lepARc1+VeqARc1+FerARc194AEF/zbLrAyBjQDIQxbDEQ0/YgFWzT/NP5QNP0WUDT8UDT7FlEHCFA0+lA0+RZRBwhQNPgWUQcIUDT3FlEHCFAxAFAoSwFXAH9nKUsBV38tZ0ghBjUBMgY1AkIEwkmBBgxAAQ1JIQgMQADESCEINAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKSklXACA1/1cgIDX+V0AgNf0hBFs1/FdwIDX7V5ABFzX6V5EgNflXsQEXNfhX0gEXNfdX0wEXNfYhCVs19YAE4huzqbA0A1eyIDEAEkQyBjQDIQdbCDX0NP80/lA0/VA0/BZQNPtQNPoWUQcIUDT5UDT4FlEHCFA09xZRBwhQNPYWUQcIUDT1FlA09BZQKEsBVwB/ZylLAVd/PWdIJTUBMgY1AkID8EghBTQBEkQ0BEkiEkw0AhIRRChkKWRQNQOABGG0rAywMgY0AyEJWw9EsSKyATQDIQRbsggjshA0A1dAILIHs0IDkkghBTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSkpKVwAgNf9XICA1/ldAIDX9IQRbNfwhB1s1+1dwIDX6V5ABFzX5V5EgNfhXsQEXNfdXsiA19lfSARc19VfTARc19IAEzJmSXLAyBjQDIQlbDEQ0/EkINfM0/IgDhDT2MQASRDT/NP5QNP1QNPwWUDT7FlA0+lA0+RZRBwhQNPhQNPcWUQcIUDT2UDT1FlEHCFA09BZRBwhQNPMWUChLAVcAf2cpSwFXf11nSCEINQEyBjUCQgLaSSEKDEACJUkkDEABc0khCwxAAM9IIQs0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpJVwAgNf9XICA1/ldAIDX9IQRbNfwhB1s1+1dwIDX6V5ABFzX5V5EgNfhXsQEXNfdJNQU19oAETuPwUDT2ULA09gFJNfU0+hI19DT1NPgSNfM09DTzEUQyBjT7CDXyNP80/lA0/VA0/BZQNPsWUDT6UDT5FlEHCFA0+FA09xZRBwhQMQBQNPQWUQcIUDTzFlEHCFA08hZQKEsBVwB/ZylLAVd/XWdIIQU1ATIGNQJCAfdIJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSklXACA1/1cgIDX+V0AgNf0hBFs1/CEHWzX7V3AgNfpXkAEXNflXkSA1+FexARc194AEp2XEtLA0/IgB7zT9MQASRDT/NP5QNP1QNPwWUDT7FlA0+lA0+RZRBwhQNPhQNPcWUQcIUChLAVcAf2cpSwFXfzNnSCELNQEyBjUCQgFaSCEKNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf9XKiA1/kk1BUlJIls1/SVbNfxXEAo1+4AEavez5zT9FlA0/BZQNPtQsDT7ATX6NANXIAoBNfk0+jT5EjX4NANXSgoBNfc0+jT3EjX2NPg09hFENP80/lAxAFA0/RZQNPwWUDT5UDT4FlEHCFA091A09hZRBwhQKEsBVwB/ZylLAVd/M2dIJDUBMgY1AkIArkkjDEAATkgjNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf9XIAo1/kk1BTX9gATby6szNP1QsDT/NP5QMQBQNP1QKEsBVwBUZ0ghCjUBMgY1AkIAWkiBoI0GiACjIjQBEkQ0BEkiEkw0AhIRREk1BTX/gAQ57Xy5NP9QsDEANP9QKEsBVwAqZ0gjNQEyBjUCQgAcMRkhBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCQxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 220,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes10",
                    "name": "elem0",
                    "type": "bytes10"
                  }
                ],
                "internalType": "struct T0",
                "name": "v329",
                "type": "tuple"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes10",
                    "name": "elem0",
                    "type": "bytes10"
                  }
                ],
                "internalType": "struct T0",
                "name": "v329",
                "type": "tuple"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes10",
                    "name": "elem0",
                    "type": "bytes10"
                  }
                ],
                "internalType": "struct T0",
                "name": "v336",
                "type": "tuple"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes10",
                    "name": "elem0",
                    "type": "bytes10"
                  }
                ],
                "internalType": "struct T0",
                "name": "v452",
                "type": "tuple"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v357",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v358",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes10",
                    "name": "elem0",
                    "type": "bytes10"
                  }
                ],
                "internalType": "struct T0",
                "name": "v359",
                "type": "tuple"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes10",
                    "name": "elem0",
                    "type": "bytes10"
                  }
                ],
                "internalType": "struct T0",
                "name": "v393",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes10",
                    "name": "elem0",
                    "type": "bytes10"
                  }
                ],
                "internalType": "struct T0",
                "name": "v336",
                "type": "tuple"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes10",
                    "name": "elem0",
                    "type": "bytes10"
                  }
                ],
                "internalType": "struct T0",
                "name": "v452",
                "type": "tuple"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v357",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v358",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes10",
                    "name": "elem0",
                    "type": "bytes10"
                  }
                ],
                "internalType": "struct T0",
                "name": "v359",
                "type": "tuple"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes10",
                    "name": "elem0",
                    "type": "bytes10"
                  }
                ],
                "internalType": "struct T0",
                "name": "v393",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620028a8380380620028a883398101604081905262000026916200021d565b600080554360035560408051338152825160208083019190915283015151516001600160b01b0319168183015290517f650770fce32f1978203979846dd10013fa125c241bba5b07e474735fb569e7eb9181900360600190a16200008d3415600762000116565b620000b4604080518082018252600080825282516020818101909452908152909182015290565b33808252602083810151518184019081526001600081905543905560408051808401949094529051516001600160b01b031916838201528051808403820181526060909301905281516200010d92600292019062000140565b505050620002fe565b816200013c5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200014e90620002c1565b90600052602060002090601f016020900481019282620001725760008555620001bd565b82601f106200018d57805160ff1916838001178555620001bd565b82800160010185558215620001bd579182015b82811115620001bd578251825591602001919060010190620001a0565b50620001cb929150620001cf565b5090565b5b80821115620001cb5760008155600101620001d0565b604051602081016001600160401b03811182821017156200021757634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360408112156200023157600080fd5b604080519081016001600160401b03811182821017156200026257634e487b7160e01b600052604160045260246000fd5b604052835181526020601f19830112156200027c57600080fd5b62000286620001e6565b915062000292620001e6565b60208501516001600160b01b031981168114620002ae57600080fd5b8152825260208101919091529392505050565b600181811c90821680620002d657607f821691505b60208210811415620002f857634e487b7160e01b600052602260045260246000fd5b50919050565b61259a806200030e6000396000f3fe6080604052600436106100bd5760003560e01c80638e31476911610079578063c798003711610056578063c798003714610194578063de736998146101a7578063e533a29d146101ba578063e7f1dd2f146101cd57005b80638e3147691461014b578063ab53f2c61461015e578063bf2c5b241461018157005b80631e93b0f1146100c65780632323d2ed146100ea57806373b4522c146100fd5780637c298666146101105780638323075714610123578063856a34e31461013857005b366100c457005b005b3480156100d257600080fd5b506003545b6040519081526020015b60405180910390f35b6100c46100f8366004611aa7565b6101e0565b6100c461010b366004611aa7565b6103db565b6100c461011e366004611aa7565b610597565b34801561012f57600080fd5b506001546100d7565b6100c4610146366004611aca565b61088b565b6100c4610159366004611aa7565b610b37565b34801561016a57600080fd5b50610173610dc1565b6040516100e1929190611adc565b6100c461018f366004611aa7565b610e5e565b6100c46101a2366004611aa7565b6110c8565b6100c46101b5366004611aa7565b61124b565b6100c46101c8366004611aa7565b6113b4565b6100c46101db366004611aa7565b6115d1565b6101f06001600054146009611948565b61020a8135158061020357506001548235145b600a611948565b60008080556002805461021c90611b39565b80601f016020809104026020016040519081016040528092919081815260200182805461024890611b39565b80156102955780601f1061026a57610100808354040283529160200191610295565b820191906000526020600020905b81548152906001019060200180831161027857829003601f168201915b50505050508060200190518101906102ad9190611ccc565b90507f0c2a65bf7940fa0aa45a7ddb22693920641c8e78e59945b4006e362d77b2707433836040516102e0929190611d62565b60405180910390a16102f434156008611948565b6040805160808101825260008082528251602080820185528282528084019182528385018381528551808301909652928552606084019490945284516001600160a01b031683528484015190523390529061035790368590038501908501611d7f565b60608281019182526002600055436001556040805184516001600160a01b03908116602080840191909152860151516001600160b01b031990811683850152928601511692810192909252915151909116608082015260a0015b604051602081830303815290604052600290805190602001906103d592919061196d565b50505050565b6103eb6003600054146011611948565b610405813515806103fe57506001548235145b6012611948565b60008080556002805461041790611b39565b80601f016020809104026020016040519081016040528092919081815260200182805461044390611b39565b80156104905780601f1061046557610100808354040283529160200191610490565b820191906000526020600020905b81548152906001019060200180831161047357829003601f168201915b50505050508060200190518101906104a89190611df2565b90507f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c633836040516104db929190611e8c565b60405180910390a16104f481606001513414600f611948565b604081015161050f906001600160a01b031633146010611948565b6105176119f1565b81516001600160a01b03908116825260208084015182168184015260408085015190921682840152606080850151908401526080808501519084015260a0808501519084015260c08085015115159084015260e080850151908401526101008085015115159084015260046000554360015590516103b191839101611ec4565b6105a76004600054146015611948565b6105c1813515806105ba57506001548235145b6016611948565b6000808055600280546105d390611b39565b80601f01602080910402602001604051908101604052809291908181526020018280546105ff90611b39565b801561064c5780601f106106215761010080835404028352916020019161064c565b820191906000526020600020905b81548152906001019060200180831161062f57829003601f168201915b50505050508060200190518101906106649190611df2565b9050610695604051806080016040528060008152602001600015158152602001600015158152602001600081525090565b7fe41c0d6286f3d37decf310cc51a89dbec86bb6a60978663238c945c4fb1d350833846040516106c6929190611d62565b60405180910390a16106da34156013611948565b6040516106ed9060208086019101611f4b565b60408051601f19818403018152918152815160209283012080845260a0850151811492840183905260e0850151149083015261073b90610731578160400151610734565b60015b6014611948565b608082015161074a9043611f82565b606080830191909152604080516101a0810182526000808252602082018190529181018290529182018190526080820181905260a0820181905260c0820181905260e08201819052610100820181905261012082018190526101408201819052610160820181905261018082015282516001600160a01b03908116825260208085015182168184015260408086015190921682840152606080860151818501526080808701519085015260a0808701519085015260c08087015115159085015260e080870151908501526101008087015115159085015233610120850152848201511515610140850152848301511515610160850152840151610180840152600560005543600155905161086091839101612069565b6040516020818303038152906040526002908051906020019061088492919061196d565b5050505050565b61089b600260005414600d611948565b6108b5813515806108ae57506001548235145b600e611948565b6000808055600280546108c790611b39565b80601f01602080910402602001604051908101604052809291908181526020018280546108f390611b39565b80156109405780601f1061091557610100808354040283529160200191610940565b820191906000526020600020905b81548152906001019060200180831161092357829003601f168201915b5050505050806020019051810190610958919061207e565b90506109906040518060a001604052806000815260200160008152602001600015158152602001600081526020016000151581525090565b7f223fb70107d342b357e3befff5142e0f3363939d6554490446de729558e4ebb233846040516109c192919061210b565b60405180910390a16109d53415600b611948565b6040516109e9906060850190602001611f4b565b60408051601f1981840301815291815281516020928301208352838201519051610a22920190516001600160b01b031916815260200190565b60408051601f1981840301815291815281516020928301208383018190528351148382015260608401519051610a67920190516001600160b01b031916815260200190565b60408051601f198184030181529181528151602090920191909120606083018190528251146080830152810151610ab090610aa6578160800151610aa9565b60015b600c611948565b610ab86119f1565b82516001600160a01b039081168252604080850151909116602080840191909152338284015285810135606080850191909152868301356080808601919091528583015160a086015285840151151560c08601529085015160e08501528401511515610100840152600360005543600155905161086091839101611ec4565b610b476005600054146019611948565b610b6181351580610b5a57506001548235145b601a611948565b600080805560028054610b7390611b39565b80601f0160208091040260200160405190810160405280929190818152602001828054610b9f90611b39565b8015610bec5780601f10610bc157610100808354040283529160200191610bec565b820191906000526020600020905b815481529060010190602001808311610bcf57829003601f168201915b5050505050806020019051810190610c049190612242565b9050610c1c6040518060200160405280600081525090565b610c2e8261018001514310601b611948565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d3384604051610c5f929190611e8c565b60405180910390a16060820151610c769080611f82565b81526060820151610c8a9034146017611948565b610120820151610ca6906001600160a01b031633146018611948565b604080516101a081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081019190915282516001600160a01b039081168252602080850151821681840152604080860151831681850152606080870151908501526080808701519085015260a0808701519085015260c08087015115159085015260e0808701519085015261010080870151151590850152610120808701519093169284019290925261014080860151151590840152610160808601511515908401528351610180840152600760005543600155905161086091839101612069565b600060606000546002808054610dd690611b39565b80601f0160208091040260200160405190810160405280929190818152602001828054610e0290611b39565b8015610e4f5780601f10610e2457610100808354040283529160200191610e4f565b820191906000526020600020905b815481529060010190602001808311610e3257829003601f168201915b50505050509050915091509091565b610e6e6007600054146022611948565b610e8881351580610e8157506001548235145b6023611948565b600080805560028054610e9a90611b39565b80601f0160208091040260200160405190810160405280929190818152602001828054610ec690611b39565b8015610f135780601f10610ee857610100808354040283529160200191610f13565b820191906000526020600020905b815481529060010190602001808311610ef657829003601f168201915b5050505050806020019051810190610f2b9190612242565b9050610f436040518060200160405280600081525090565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3384604051610f74929190611e8c565b60405180910390a1610f8834156020611948565b610120820151610fa4906001600160a01b031633146021611948565b6080820151610fb39043611f82565b81526040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101829052610140810182905261016081019190915282516001600160a01b039081168252602080850151821681840152604080860151909216828401526060808601519084015260a080860151608085015260c08087015115159185019190915260e0808701519185019190915261010080870151151591850191909152610140808701511515918501919091526101608087015115156101208601526101808701519185019190915284519084015260086000554360015590516108609183910161225f565b6110d8600560005414601d611948565b6110f2813515806110eb57506001548235145b601e611948565b60008080556002805461110490611b39565b80601f016020809104026020016040519081016040528092919081815260200182805461113090611b39565b801561117d5780601f106111525761010080835404028352916020019161117d565b820191906000526020600020905b81548152906001019060200180831161116057829003601f168201915b50505050508060200190518101906111959190612242565b90506111aa816101800151431015601f611948565b7fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae33836040516111db929190611e8c565b60405180910390a16111ef3415601c611948565b80604001516001600160a01b03166108fc82606001519081150290604051600060405180830381858888f19350505050158015611230573d6000803e3d6000fd5b506000808055600181905561124790600290611a3d565b5050565b61125b6008600054146029611948565b6112758135158061126e57506001548235145b602a611948565b60008080556002805461128790611b39565b80601f01602080910402602001604051908101604052809291908181526020018280546112b390611b39565b80156113005780601f106112d557610100808354040283529160200191611300565b820191906000526020600020905b8154815290600101906020018083116112e357829003601f168201915b50505050508060200190518101906113189190612324565b905061132d816101600151431015602b611948565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd338360405161135e929190611e8c565b60405180910390a161137234156028611948565b80604001516001600160a01b03166108fc8261014001519081150290604051600060405180830381858888f19350505050158015611230573d6000803e3d6000fd5b6113c46008600054146025611948565b6113de813515806113d757506001548235145b6026611948565b6000808055600280546113f090611b39565b80601f016020809104026020016040519081016040528092919081815260200182805461141c90611b39565b80156114695780601f1061143e57610100808354040283529160200191611469565b820191906000526020600020905b81548152906001019060200180831161144c57829003601f168201915b50505050508060200190518101906114819190612324565b905061149581610160015143106027611948565b7f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb6077633836040516114c6929190611e8c565b60405180910390a16114df816060015134146024611948565b6040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915281516001600160a01b039081168252602080840151909116818301526060808401516040808501919091526080808601519285019290925260a08086015115159285019290925260c0808601519285019290925260e08086015115159285019290925261010080860151151592850192909252610120808601511515928501929092523391840191909152600a60005543600155516103b1918391016123ef565b6115e1600a60005414602f611948565b6115fb813515806115f457506001548235145b6030611948565b60008080556002805461160d90611b39565b80601f016020809104026020016040519081016040528092919081815260200182805461163990611b39565b80156116865780601f1061165b57610100808354040283529160200191611686565b820191906000526020600020905b81548152906001019060200180831161166957829003601f168201915b505050505080602001905181019061169e919061249d565b60408051606081018252600080825260208201819052818301529051919250907fdbc0792702710f021d373926d7240bed8dac06df09138a7d36f810d4510b697a906116ed9033908690611d62565b60405180910390a16117013415602c611948565b61012082015161171d906001600160a01b03163314602d611948565b6040516117309060208086019101611f4b565b60408051601f1981840301815291815281516020928301208084526060850151811492840183905260a0850151149083015261177e90611774578160400151611777565b60015b602e611948565b816080015161178e576000611794565b8160e001515b156117ff5781600001516001600160a01b03166108fc600384604001516117bb9190612545565b6040518115909202916000818181858888f193505050501580156117e3573d6000803e3d6000fd5b50600080805560018190556117fa90600290611a3d565b505050565b8160c0015161180f576000611816565b8161010001515b1561183d5781602001516001600160a01b03166108fc600384604001516117bb9190612545565b816080015161184d576000611853565b80602001515b1561187a5781600001516001600160a01b03166108fc600384604001516117bb9190612545565b8160c0015161188a576000611890565b80604001515b156118b75781602001516001600160a01b03166108fc600384604001516117bb9190612545565b8161010001516118c85760006118ce565b80604001515b156118f55781602001516001600160a01b03166108fc600384604001516117bb9190612545565b8160e0015161190557600061190b565b80602001515b156119325781600001516001600160a01b03166108fc600384604001516117bb9190612545565b600080805560018190556117fa90600290611a3d565b816112475760405163100960cb60e01b81526004810182905260240160405180910390fd5b82805461197990611b39565b90600052602060002090601f01602090048101928261199b57600085556119e1565b82601f106119b457805160ff19168380011785556119e1565b828001600101855582156119e1579182015b828111156119e15782518255916020019190600101906119c6565b506119ed929150611a7a565b5090565b6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915290565b508054611a4990611b39565b6000825580601f10611a59575050565b601f016020900490600052602060002090810190611a779190611a7a565b50565b5b808211156119ed5760008155600101611a7b565b600060408284031215611aa157600080fd5b50919050565b600060408284031215611ab957600080fd5b611ac38383611a8f565b9392505050565b600060808284031215611aa157600080fd5b82815260006020604081840152835180604085015260005b81811015611b1057858101830151858201606001528201611af4565b81811115611b22576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680611b4d57607f821691505b60208210811415611aa157634e487b7160e01b600052602260045260246000fd5b604051610120810167ffffffffffffffff81118282101715611ba057634e487b7160e01b600052604160045260246000fd5b60405290565b6040516101a0810167ffffffffffffffff81118282101715611ba057634e487b7160e01b600052604160045260246000fd5b604051610180810167ffffffffffffffff81118282101715611ba057634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611ba057634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114611c5357600080fd5b919050565b6001600160b01b031981168114611a7757600080fd5b600060208284031215611c8057600080fd5b6040516020810181811067ffffffffffffffff82111715611cb157634e487b7160e01b600052604160045260246000fd5b80604052508091508251611cc481611c58565b905292915050565b600060408284031215611cde57600080fd5b6040516040810181811067ffffffffffffffff82111715611d0f57634e487b7160e01b600052604160045260246000fd5b604052611d1b83611c3c565b8152611d2a8460208501611c6e565b60208201529392505050565b803582526020810135611d4881611c58565b69ffffffffffffffffffff60b01b81166020840152505050565b6001600160a01b038316815260608101611ac36020830184611d36565b600060208284031215611d9157600080fd5b6040516020810181811067ffffffffffffffff82111715611dc257634e487b7160e01b600052604160045260246000fd5b6040528235611dd081611c58565b81529392505050565b8015158114611a7757600080fd5b8051611c5381611dd9565b60006101208284031215611e0557600080fd5b611e0d611b6e565b611e1683611c3c565b8152611e2460208401611c3c565b6020820152611e3560408401611c3c565b6040820152606083015160608201526080830151608082015260a083015160a0820152611e6460c08401611de7565b60c082015260e083015160e0820152610100611e81818501611de7565b908201529392505050565b6001600160a01b038316815281356020808301919091526060820190830135611eb481611dd9565b8015156040840152509392505050565b81516001600160a01b0390811682526020808401518216908301526040808401519182169083015261012082019050606083015160608301526080830151608083015260a083015160a083015260c0830151611f2460c084018215159052565b5060e083015160e083015261010080840151611f438285018215159052565b505092915050565b602081018235611f5a81611c58565b6001600160b01b031916909152919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611f9557611f95611f6c565b500190565b80516001600160a01b031682526020810151611fc160208401826001600160a01b03169052565b506040810151611fdc60408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015161200e60c084018215159052565b5060e081015160e08301526101008082015161202d8285018215159052565b5050610120818101516001600160a01b031690830152610140808201511515908301526101608082015115159083015261018090810151910152565b6101a081016120788284611f9a565b92915050565b60006080828403121561209057600080fd5b6040516080810181811067ffffffffffffffff821117156120c157634e487b7160e01b600052604160045260246000fd5b6040526120cd83611c3c565b81526120dc8460208501611c6e565b60208201526120ed60408401611c3c565b60408201526120ff8460608501611c6e565b60608201529392505050565b600060a08201905060018060a01b0384168252823560208301526020830135604083015260408301356060830152606083013561214781611c58565b69ffffffffffffffffffff60b01b81166080840152509392505050565b60006101a0828403121561217757600080fd5b61217f611ba6565b905061218a82611c3c565b815261219860208301611c3c565b60208201526121a960408301611c3c565b6040820152606082015160608201526080820151608082015260a082015160a08201526121d860c08301611de7565b60c082015260e082015160e08201526101006121f5818401611de7565b90820152610120612207838201611c3c565b90820152610140612219838201611de7565b9082015261016061222b838201611de7565b818301525061018080830151818301525092915050565b60006101a0828403121561225557600080fd5b611ac38383612164565b81516001600160a01b031681526101808101602083015161228b60208401826001600160a01b03169052565b5060408301516122a660408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a08301516122ce60a084018215159052565b5060c083015160c083015260e08301516122ec60e084018215159052565b506101008381015115159083015261012080840151151590830152610140808401519083015261016092830151929091019190915290565b6000610180828403121561233757600080fd5b61233f611bd8565b61234883611c3c565b815261235660208401611c3c565b602082015261236760408401611c3c565b6040820152606083015160608201526080830151608082015261238c60a08401611de7565b60a082015260c083015160c08201526123a760e08401611de7565b60e08201526101006123ba818501611de7565b908201526101206123cc848201611de7565b908201526101408381015190820152610160928301519281019290925250919050565b81516001600160a01b031681526101408101602083015161241b60208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151612443608084018215159052565b5060a083015160a083015260c083015161246160c084018215159052565b5060e083015161247560e084018215159052565b5061010083810151151590830152610120808401516001600160a01b03811682850152611f43565b600061014082840312156124b057600080fd5b6124b8611c0a565b6124c183611c3c565b81526124cf60208401611c3c565b602082015260408301516040820152606083015160608201526124f460808401611de7565b608082015260a083015160a082015261250f60c08401611de7565b60c082015261252060e08401611de7565b60e0820152610100612533818501611de7565b90820152610120611e81848201611c3c565b600081600019048311821515161561255f5761255f611f6c565b50029056fea264697066735822122055bf8d6433f54f3017e0e69de977d340c463283b92a749a77df8c70e87c8302364736f6c634300080c0033`,
  BytecodeLen: 10408,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:57:9:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:65:9:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:83:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:86:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:98:9:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:100:49:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:101:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:103:9:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:116:49:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:117:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:130:9:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:130:9:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  13: {
    at: './index.rsh:130:9:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: './index.rsh:130:9:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  15: {
    at: './index.rsh:130:9:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  16: {
    at: './index.rsh:130:9:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  17: {
    at: './index.rsh:130:9:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Proposer1": Proposer1,
  "Proposer2": Proposer2,
  "user1": user1,
  "user2": user2,
  "user3": user3
  };
export const _APIs = {
  };
