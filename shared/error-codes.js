const ErrorCode = {
	GeneralError: 'GENERAL_ERROR',
	InternalServerError: 'INTERNAL_SERVER_ERROR',
	InvalidBody: 'INVALID_BODY',
	InvalidAbnormality: 'INVALID_ABNORMALITY',
	InvalidVisualLimp: 'INVALID_VISUAL_LIMP',
	InvalidId: 'INVALID_ID',
	InvalidName: 'INVALID_NAME',
	InvalidStage: 'INVALID_STAGE',
	InvalidReturnToWork: 'INVALID_RETURN_TO_WORK',
	InvalidSession: 'INVALID_SESSION',
	InvalidCaseId: 'INVALID_CASE_ID',
	InvalidPatientId: 'INVALID_PATIENT_ID',
	InvalidDoctorId: 'INVALID_DOCTOR_ID',
	InvalidVisitSessionId: 'INVALID_VISIT_SESSION_ID',
	InvalidRangeOfMotions: 'INVALID_RANGE_OF_MOTION',
	InvalidCondition: 'INVALID_PATIENT_CONDITION',
	MissingEnv: 'MISSING_ENV',
	MissingId: 'MISSING_ID',
	transactionNotCreated: 'TRANSACTION_NOT_CREATED',
	HttpError: 'HTTP_ERROR'
};

module.exports = { ErrorCode };
