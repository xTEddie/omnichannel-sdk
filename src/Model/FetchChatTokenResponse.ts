export default class FetchChatTokenResponse {
  public ChatId!: string;
  public ExpiresIn!: string;
  public Token!: string;
  public VisitorId!: string;
  public Region!: string;
  public RegionGtms!: string | object;
  public requestId!: string;
  public AttachmentConfiguration!: { AttachmentServiceEndpoint:string };
  public ACSEndpoint!: string;
  public VoiceVideoCallToken!: object;
}
