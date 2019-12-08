// // preparing FIND ALL in 'banks' COLLECTION
// const findBanks = function(done) {
//     Bank.find({})
//         .sort("name")
//         .select("name")
//         .exec((err, banksFound) => {
//             if (err) {
//                 return err;
//             }
//             done(null, banksFound);
//             return true;
//         });
// };
//
// // preparing FIND the ONE in 'banks' COLLECTION from /bank?name=bankName
// const getBankByName = function(bankName, done) {
//     Bank.findOne({name: bankName}, (err, bankFound) => {
//         if (err) {
//             return err;
//         }
//         done(null, bankFound);
//         return true;
//     });
// };
//
// // FETCH BANKS COLLECTION
// app.get("/bank", (req, res) => {
//     if (req.query.name) {
//         const bankName = req.query.name;
//         getBankByName(bankName, (errBank, bank) => {
//             if (errBank) {
//                 return errBank;
//             }
//             if (bank === null) {
//                 findBanks((errBanks, banks) => {
//                     if (errBanks) {
//                         return errBanks;
//                     }
//                     res.send({banks});
//                     return true;
//                 });
//             } else {
//                 res.send({bank});
//             }
//             return true;
//         });
//     } else {
//         findBanks((err, banks) => {
//             if (err) {
//                 return err;
//             }
//             res.send({banks});
//             return true;
//         });
//     }
// });
// // END-OF FETCH BANKS COLLECTION
