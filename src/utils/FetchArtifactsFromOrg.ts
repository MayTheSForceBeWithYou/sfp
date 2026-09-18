
import SFPLogger, { Logger, LoggerLevel } from '@flxbl-io/sfp-logger';

export async function mapInstalledArtifactstoPkgAndCommits(
	installedArtifacts: any,
	logger?: Logger,
) {
	let packagesMappedToLastKnownCommitId: { [p: string]: string } = {};
	if (installedArtifacts != null) {
		packagesMappedToLastKnownCommitId =
			getPackagesToCommits(installedArtifacts);
	}
	SFPLogger.log(
		`Resolved installed artifact package-to-commit map with ${Object.keys(packagesMappedToLastKnownCommitId).length} entr${Object.keys(packagesMappedToLastKnownCommitId).length === 1 ? 'y' : 'ies'}`,
		LoggerLevel.DEBUG,
		logger
	);
	Object.entries(packagesMappedToLastKnownCommitId).forEach(([packageName, commitId]) => {
		SFPLogger.log(
			`Loaded installed artifact baseline for package ${packageName} with commit ${commitId}`,
			LoggerLevel.TRACE,
			logger
		);
	});
	return packagesMappedToLastKnownCommitId;

	function getPackagesToCommits(installedArtifacts: any): {
		[p: string]: string;
	} {
		const packagesToCommits: { [p: string]: string } = {};

		// Construct map of artifact and associated commit Id
		installedArtifacts.forEach((artifact) => {
			packagesToCommits[artifact.Name] = artifact.CommitId__c;
		});

		//Override for debugging purposes
		if (process.env.VALIDATE_OVERRIDE_PKG) {
			SFPLogger.log(
				`Applying VALIDATE_OVERRIDE_PKG override for package ${process.env.VALIDATE_OVERRIDE_PKG} with commit ${process.env.VALIDATE_PKG_COMMIT_ID}`,
				LoggerLevel.DEBUG,
				logger
			);
			packagesToCommits[process.env.VALIDATE_OVERRIDE_PKG] =
				process.env.VALIDATE_PKG_COMMIT_ID;
		}

		if (process.env.VALIDATE_REMOVE_PKG) {
			SFPLogger.log(
				`Applying VALIDATE_REMOVE_PKG override by removing package ${process.env.VALIDATE_REMOVE_PKG} from the installed artifact baseline map`,
				LoggerLevel.DEBUG,
				logger
			);
			delete packagesToCommits[process.env.VALIDATE_REMOVE_PKG];
		}

		return packagesToCommits;
	}
}
