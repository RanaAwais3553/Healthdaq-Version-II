export const QRSCAN_POST_ID = "QRSCAN_POST_ID";
export const QRSCAN_POST_ATTENDENCE = "QRSCAN_POST_ATTENDENCE";

export const qrScanEmployeMember = (candidateId) => {
  return { type: QRSCAN_POST_ID, candidateId: candidateId };
};
