import { Contract } from '@ethersproject/contracts'
import loanABI  from "./contracts/Loan.json";
import swapABI  from "./contracts/Swap.json";
import erc20  from "./contracts/erc20.json";


const contractInstance = (signer) => {
  return new Contract(loanABI.address, loanABI.abi, signer);
};
const swapcontractInstance = (signer) => {
  return new Contract(swapABI.address, swapABI.abi, signer);
};
  
const erc20Instance = (signer, coin) => {
  let address = "";
  switch (coin) {
    case "egr":
      address = erc20.egr;
      break;
      case "egc":
        address = erc20.egc;
        break;
        case "eusd":
      address = erc20.eusd;
      break;
    default:
      break;
  }
  return new Contract(address, erc20.abi, signer);
};

const approveCompany = async (address, signer) =>{
  try {
    const instance = contractInstance(signer);
    let result = await instance.approveLoanCompany(address);
    return {
      message: result.hash,
    status: true,
    }
    } catch (error) {
      console.log(error);
    return {
      message:  error.data.message,
      status: false,
    };
    }
}


const voteInCompany = async (company, type, votingPower, signer) => {
  try {
    const instance = contractInstance(signer);
    let result = await instance.voteinCompany(company, votingPower, type);
    return {
      message: result.hash,
    status: true,
    }
    } catch (error) {
    return {
      message:  error.data.message,
      status: false,
    };
    }
}

const systemInfo = async (signer) =>{
  const instance = contractInstance(signer);
  let result = await instance.systemInfo();
  console.log(result);

}
const loanInfo = async (loanID, signer) =>{
  try{
    const instance = contractInstance(signer);
    let result = await instance.getLoanInfo(loanID);
    return {
     
    status: result,
    }
  }catch(err){
    console.log(err);

  }
}
const claimable = async (signer) =>{
  try {
  const instance = contractInstance(signer);
    let result = await instance.claimable();
    return {
     
    status: result,
    }
  }catch (error) {
    return {
          status: false,
    };
    
  }
}


const distributeFee = async (signer) =>{
  try {
    const instance = contractInstance(signer);
    let result = await instance.distributeFee();
    return {
      message: result.hash,
    status: true,
    }
   } catch (error) {
    return {
      message:  error.data.message,
      status: false,
    };
   }
}


const rewardHoldersByVotePower = async (signer) =>{
  try {
    const instance = contractInstance(signer);
    let result = await instance.rewardHoldersByVotePower();
    return {
      message: result.hash,
    status: true,
    }
   } catch (error) {
    return {
      message:  error.data.message,
      status: false,
    };
   }
}
const transactReceipt = async (hash, library) =>{
  try {
    let result = await library.getTransactionReceipt(hash);
    return {
      message: result,
    status: true,
    }
  } catch (error) {
    return {
      message:  error,
      status: false,
    };
  }
  
}
const payLoan = async (loanID, amount, signer) => {
  try {
    const instance = contractInstance(signer);
    let result = await instance.repayLoan(loanID);
    return {
      message: result.hash,
    status: true,
    }
  } catch (error) {
    console.log(error);
    return {
      message:  error,
      status: false,
    }
  }
}

const activateLoan = async (loanID, signer) => {
  try {
    const instance = contractInstance(signer);
    let result = await instance.approveLoan(loanID);
    return {
      message: result.hash,
    status: true,
    }
  } catch (error) {
    return {
      message:  error.data.message,
      status: false,
    }
  }
}

const acceptLoan = async (loanID, type, votingPower, signer) => {
  try {
    const instance = contractInstance(signer);
    let result = await instance.vote(loanID, votingPower);
    return {
      message: result.hash,
    status: true,
    }
    } catch (error) {
    return {
      message: error.data.message,
      status: false,
    };
    }
}
const checkAllowance = async (owner, amount, signer, coin) =>{
  console.log(owner, amount, coin, signer );
  try {
    const instance = erc20Instance(signer, coin);
  
    let result = await instance.allowance(owner, loanABI.address);
  console.log(result.toString(), "Allowance check!");
    if (parseFloat(result.toString()) >= parseFloat(amount.toString())) {
      return {
      status: true,
      }
    }else{
      return {
        status: false,
        }
    }
    
  } catch (error) {
    console.log(error);
    return {
      status: false,
      }
  }
}
const unluckToken = async(amount, signer, coin) => {
  try {
    const instance = erc20Instance(signer, coin);
    let result = await instance.approve(loanABI.address, amount);
    return {
      message: result.hash,
    status: true,
    }
  } catch (error) {
    console.log(error);
    return {
      message:  error.data.message,
      status: false,
    };
  }
}
  
  

const addUploader = async ( address, reward_address, signer) =>{

  try {
    const instance = contractInstance(signer);
    let result = await instance.addBranch(
      address, reward_address);
    return {
      message: result.hash,
    status: true,
    }
    } catch (error) {
      console.log(error);
    return {
      message:  error.data.message,
      status: false,
    };
    }
}
const creatLoan = async ( 
  title, 
  amount,
  length, 
  inventory_fee,
  image_url, 
  isLoan,
  metadata, 
  signer) =>{

  try {
    const instance = contractInstance(signer);
    let result = await instance.applyForLoan(
      title,
      amount,
      length,
      inventory_fee,
      image_url,isLoan, metadata);
    return {
      message: result.hash,
    status: true,
    }
    } catch (error) {
    
    return {
      message: error.data.message,
      status: false,
    };
    }
}
const getSystemConfig = async (signer) => {
  try {
  const instance = contractInstance(signer);
  let result = await instance.systemInfo();
  return {
    requestpower: result._requestpower,
    loanFee: result._loanFee,
    totalIncentive: result._totalIncentive,
    weeklyIncentive: result._weeklyIncentive,
    treasuryCut: result._treasuryCut,
    nextClaimDate: result._nextClaimDate,
    status: true
    }
  } catch (error) {
    console.log(error);
  return {
    status: false,
  }
  }
}
const registerCompany = async (companyName, signer) => {
try {
const instance = contractInstance(signer);
let result = await instance.registerLoanCompany(companyName);

  return {
  message: result.hash,
  status: true,
  }

} catch (error) {
return {
  message:  error.data.message,
  status: false,
};
}


}
const confirmLoan = async (loanID,signer) =>{
  console.log(loanID, signer);
try {
  const instance = contractInstance(signer);
  let result = await instance.confirmLoan(loanID);

    return {
    message: result.hash,
    status: true,
    }
  
  } catch (error) {
  return {
    message:  error.data.message,
    status: false,
  };
  }
}
const makeRequest = async (requestType,value, reason, withdrawEGR, signer) => {
  try {
    const instance = contractInstance(signer);
    let result = await instance.createRequest(requestType,value, reason, withdrawEGR);
  
      return {
      message: result.hash,
      status: true,
      }
    
  } catch (error) {
    return {
      message:  error.data.message,
      status: false,
    };
  }
    
  
}

const voteRequest = async (requestType, requestID, votePower, accept, signer) => {
  try {
    const instance = contractInstance(signer);
    let result = await instance.governanceVote(requestType, requestID, votePower, accept);
    
      return {
      message: result.hash,
      status: true,
      }
    
  } catch (error) {
    return {
      message:  error.data.message,
      status: false,
    };
  }
    
  
}

  const initiateRequest = async (requestID, signer) => {
    try {
      const instance = contractInstance(signer);
      let result = await instance.validateRequest(requestID);
      
        return {
        message: result.hash,
        status: true,
        }
      
    } catch (error) {
      return {
        message:  error.data.message,
        status: false,
      };
    }
    
}



// *********************************
// *********************************
// API FOR SWAP
// *********************************
// *********************************




// const balanceOfUI = async (account) =>{
//   console.log(account);
//   try {
//     const instance = erc20Instance(signer, coin);
  
//     let result = await instance.balanceOf(account);
//   console.log(result.toString(), "Allowance check!");
//     if (parseFloat(result.toString()) >= parseFloat(amount.toString())) {
//       return {
//       status: true,
//       }
//     }else{
//       return {
//         status: false,
//         }
//     }
    
//   } catch (error) {
//     console.log(error);
//     return {
//       status: false,
//       }
//   }
// }

// const checkAllowanceSwap = async (owner, amount, signer, coin) =>{
//   console.log(owner, amount, coin, signer );
//   try {
//     const instance = erc20Instance(signer, coin);
  
//     let result = await instance.allowance(owner, loanABI.address);
//   console.log(result.toString(), "Allowance check!");
//     if (parseFloat(result.toString()) >= parseFloat(amount.toString())) {
//       return {
//       status: true,
//       }
//     }else{
//       return {
//         status: false,
//         }
//     }
    
//   } catch (error) {
//     console.log(error);
//     return {
//       status: false,
//       }
//   }
// }


const swapUI = async (amount, isBase, signer) =>{
  console.log(amount);
  try {
    const instance = swapcontractInstance(signer);
  
    let result = await instance.swap(amount, isBase);
  console.log(result.toString(), "Allowance check!");
    if (parseFloat(result.toString()) >= parseFloat(amount.toString())) {
      return {
      status: true,
      }
    }else{
      return {
        status: false,
        }
    }
    
  } catch (error) {
    console.log(error);
    return {
      status: false,
      }
  }
}


const transferUI = async (recipient, amount, signer) =>{
  console.log(recipient, amount);
  try {
    const instance = swapcontractInstance(signer);
  
    let result = await instance.transfer(recipient, amount);
  console.log(result.toString(), "Allowance check!");
    if (parseFloat(result.toString()) >= parseFloat(amount.toString())) {
      return {
      status: true,
      }
    }else{
      return {
        status: false,
        }
    }
    
  } catch (error) {
    console.log(error);
    return {
      status: false,
      }
  }
}


const approveUI = async (amount, signer) =>{
  console.log(amount);
  try {
    const instance = swapcontractInstance(signer);
  
    let result = await instance.approve(swapABI.address, amount);
  console.log(result.toString(), "Allowance check!");
    if (parseFloat(result.toString()) >= parseFloat(amount.toString())) {
      return {
      status: true,
      }
    }else{
      return {
        status: false,
        }
    }
    
  } catch (error) {
    console.log(error);
    return {
      status: false,
      }
  }
}


const transferFromUI = async (recipient, amount, signer) =>{
  console.log(recipient, amount);
  try {
    const instance = swapcontractInstance(signer);
  
    let result = await instance.transferFrom(swapABI.address, recipient, amount);
  console.log(result.toString(), "Allowance check!");
    if (parseFloat(result.toString()) >= parseFloat(amount.toString())) {
      return {
      status: true,
      }
    }else{
      return {
        status: false,
        }
    }
    
  } catch (error) {
    console.log(error);
    return {
      status: false,
      }
  }
}


const getUserTotalSwap = async (user, signer) =>{

  try {
    const instance = swapcontractInstance(signer);
    let result = await instance.getUserTotalSwap(user);
    return {
      message: result,
      // message: result.hash,
    status: true,
    }
    } catch (error) {
    
    return {
      message: error.data.message,
      status: false,
    };
    }
}


const addLiquidityUI = async (amount, signer) =>{
  console.log(amount);
  try {
    const instance = swapcontractInstance(signer);
  
    let result = await instance.addLiquidity(amount);
  console.log(result.toString(), "Allowance check!");
    if (parseFloat(result.toString()) >= parseFloat(amount.toString())) {
      return {
      status: true,
      }
    }else{
      return {
        status: false,
        }
    }
    
  } catch (error) {
    console.log(error);
    return {
      status: false,
      }
  }
}





   export {
    voteInCompany,
    registerCompany,
    creatLoan,
    approveCompany,
    acceptLoan,
    unluckToken,
    checkAllowance,
    transactReceipt,
    activateLoan,
    makeRequest,
    voteRequest,
    initiateRequest,
    payLoan,
    getSystemConfig,
    rewardHoldersByVotePower,
    claimable,
    addUploader,
    confirmLoan,
    loanInfo
    
   };